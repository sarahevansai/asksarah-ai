// Site-wide header and footer. Used by build.mjs for generated pages and
// synced into every hand-built page between <!--sa:...--> markers, so the
// whole site shares one nav. Change the nav here, then run the build.

export const NAV = [
  ['/skills', 'Skills'], ['/stack', "Sarah's Stack"], ['/shortcuts', 'Shortcuts'], ['/systems', 'Systems'],
  ['/edit', "Sarah's Edit"], ['/about', 'About'],
];

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const WORDMARK = '<span class="a">ask</span><span class="s">Sarah</span><span class="d">.ai</span>';

export const FONTS = `<link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">`;

// Older pages call getElementById() on these IDs from their own scripts.
// Keeping hidden stand-ins stops those scripts from crashing.
const LEGACY_STUBS = '<div hidden aria-hidden="true"><div id="mobileMenu"></div><div id="navDropdown"><button id="navDropdownBtn" type="button" tabindex="-1"></button><div id="navDropdownMenu"></div></div></div>';

export function header(pathname = '', { legacy = false } = {}) {
  const current = (href) => (pathname === href || pathname.startsWith(href + '/') ? ' aria-current="page"' : '');
  return `<a class="sa-skip" href="#main">Skip to content</a>
<header class="sa-header">
  <div class="sa-wrap sa-nav" role="navigation" aria-label="Main">
    <a class="sa-wordmark" href="/" aria-label="askSarah.ai home">${WORDMARK}</a>
    <button class="sa-toggle" type="button" aria-expanded="false" aria-controls="sa-links">Menu</button>
    <div class="sa-links" id="sa-links">
      ${NAV.map(([h, l]) => `<a href="${h}"${current(h)}>${esc(l)}</a>`).join('\n      ')}
      <a class="sa-search" href="/search"${current('/search')}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>Search</a>
    </div>
  </div>
</header>${legacy ? '\n' + LEGACY_STUBS : ''}`;
}

export function footer() {
  return `<footer class="sa-footer">
  <div class="sa-wrap">
    <div class="sa-footer-grid">
      <div>
        <a class="sa-wordmark" href="/">${WORDMARK}</a>
        <p>If something is sponsored or I make money when you buy it, I'll tell you. Right there on the page.</p>
      </div>
      <div>
        <h4>AskSarah</h4>
        <a href="/skills">Skills</a><a href="/stack">Sarah's Stack</a><a href="/shortcuts">Shortcuts</a><a href="/systems">Systems</a><a href="/edit">Sarah's Edit</a><a href="/things-ai-can-do">Things AI can do</a>
      </div>
      <div>
        <h4>More from Sarah</h4>
        <a href="/learn">Articles</a><a href="/newsletter">Newsletter</a><a href="/shows">Live shows</a><a href="/tools">Tools</a><a href="/speaking">Speaking</a><a href="/press">Press</a><a href="/ask">Ask my digital twin</a>
      </div>
      <div>
        <h4>Elsewhere</h4>
        <a href="https://www.linkedin.com/in/prsarahevans" rel="noopener">LinkedIn</a><a href="https://prsarahevans.substack.com" rel="noopener">Substack</a><a href="https://hackernoon.com/u/sarahevans" rel="noopener">HackerNoon</a><a href="https://github.com/sarahevansai" rel="noopener">GitHub</a><a href="/connect">Connect</a>
      </div>
    </div>
    <div class="sa-footer-bottom"><span>© <span id="currentYear">${new Date().getFullYear()}</span> Sarah Evans</span><a href="/about">About Sarah</a></div>
  </div>
</footer>`;
}
