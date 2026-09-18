// api/create-checkout.js
// Vercel serverless function — creates a Stripe Checkout session.
//
// Required Vercel env vars:
//   STRIPE_SECRET_KEY       — sk_live_... or sk_test_...
//   NEXT_PUBLIC_SITE_URL    — https://asksarah.ai (no trailing slash)

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
  timeout: 10000,
  maxNetworkRetries: 2,
});

const ALLOWED_SKILLS = {
  'bundle-v1':                    { name: 'The Full Skills Suite',          priceInCents: 12500 },
  'jaded-journalist':             { name: 'Jaded Journalist',               priceInCents: 1900  },
  'press-release-that-lands':     { name: 'Press Release That Lands',       priceInCents: 1900  },
  'crisis-first-hour':            { name: 'Crisis: First Hour',             priceInCents: 2900  },
  'timely-pov':                   { name: 'Timely POV',                     priceInCents: 1500  },
  'company-boilerplate':          { name: 'Company Boilerplate',            priceInCents: 1500  },
  'ai-slop-detector':             { name: 'AI Slop Detector',               priceInCents: 1900  },
  'ai-visibility-audit':          { name: 'AI Visibility Audit',            priceInCents: 2900  },
  'answer-ready-content':         { name: 'Answer-Ready Content',           priceInCents: 1900  },
  'source-vetting':               { name: 'Source Vetting',                 priceInCents: 1900  },
  'editorial-qa':                 { name: 'Editorial QA',                   priceInCents: 1900  },
  'logic-police':                 { name: 'Logic Police',                   priceInCents: 1900  },
  'linkedin-thought-leader-30':   { name: 'LinkedIn Thought Leader: 30',    priceInCents: 2900  },
  'communicate-like-a-ceo':       { name: 'Communicate Like a CEO',         priceInCents: 1900  },
  'coordinator-to-owner':         { name: 'Coordinator to Owner',           priceInCents: 1900  },
  'delegation-brief':             { name: 'Delegation Brief',               priceInCents: 1500  },
  'meetings-that-earn-their-hour':{ name: 'Meetings That Earn Their Hour',  priceInCents: 1500  },
  'learning-curve-destroyer':     { name: 'Learning Curve Destroyer',       priceInCents: 1900  },
  'build-your-own-skill':         { name: 'Build Your Own Skill',           priceInCents: 1900  },
  'image-metadata':               { name: 'Image Metadata',                 priceInCents: 1500  },
};

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { skillId, skillName, priceInCents } = req.body || {};
  const siteUrl = 'https://asksarah.ai';

  const skill = ALLOWED_SKILLS[skillId];
  if (!skill) return res.status(400).json({ error: 'Unknown skill ID' });
  if (skill.priceInCents !== priceInCents) return res.status(400).json({ error: 'Price mismatch' });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [{
        price_data: {
          currency: 'usd',
          unit_amount: skill.priceInCents,
          product_data: {
            name: skill.name,
            description: 'Claude Code skill — instant digital download after payment.',
            images: [`${siteUrl}/og-image.png`],
          },
        },
        quantity: 1,
      }],
      success_url: `${siteUrl}/claude-skills.html?success=1&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:  `${siteUrl}/claude-skills.html?canceled=1`,
      metadata: { skillId },
    });
    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err.message);
    return res.status(500).json({ error: 'Failed to create checkout session', detail: err.message });
  }
};
