// Vercel serverless function — proxies Substack RSS feed server-side to avoid CORS
export default async function handler(req, res) {
  // Allow GET only
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=600');

  try {
    const feedUrl = 'https://prsarahevans.substack.com/feed';
    const response = await fetch(feedUrl, {
      headers: {
        'User-Agent': 'askSarah.ai/1.0 (Newsletter Feed Proxy)',
        'Accept': 'application/rss+xml, application/xml, text/xml'
      }
    });

    if (!response.ok) {
      throw new Error(`Substack feed returned ${response.status}`);
    }

    const xml = await response.text();

    // Parse out items with a simple regex approach for the serverless function
    const items = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;
    while ((match = itemRegex.exec(xml)) !== null && items.length < 8) {
      const itemXml = match[1];
      const title = (itemXml.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) || itemXml.match(/<title>(.*?)<\/title>/) || [])[1] || 'Untitled';
      const link = (itemXml.match(/<link>(.*?)<\/link>/) || [])[1] || '#';
      const pubDate = (itemXml.match(/<pubDate>(.*?)<\/pubDate>/) || [])[1] || '';
      const description = (itemXml.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/) || itemXml.match(/<description>(.*?)<\/description>/) || [])[1] || '';

      // Strip HTML tags from description for a clean preview
      const preview = description.replace(/<[^>]*>/g, '').substring(0, 200).trim();

      items.push({ title, link, pubDate, preview });
    }

    return res.status(200).json({ items });
  } catch (error) {
    console.error('Newsletter feed error:', error);
    return res.status(500).json({ error: 'Failed to fetch newsletter feed' });
  }
}
