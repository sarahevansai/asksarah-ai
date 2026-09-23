// api/download.js
// Vercel serverless function — validates a completed Stripe Checkout session
// and serves the corresponding skill .zip as a file download.
//
// Required Vercel env vars:
//   STRIPE_SECRET_KEY   — your Stripe secret key
//
// Skill zip files live at: /public/skills/<skillId>.zip

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const path   = require('path');
const fs     = require('fs');

const SKILL_ZIP_MAP = {
  'bundle-v1':                    'bundle-v1.zip',
  'jaded-journalist':             'jaded-journalist.zip',
  'press-release-that-lands':     'press-release-that-lands.zip',
  'crisis-first-hour':            'crisis-first-hour.zip',
  'timely-pov':                   'timely-pov.zip',
  'company-boilerplate':          'company-boilerplate.zip',
  'ai-slop-detector':             'ai-slop-detector.zip',
  'ai-visibility-audit':          'ai-visibility-audit.zip',
  'answer-ready-content':         'answer-ready-content.zip',
  'source-vetting':               'source-vetting.zip',
  'editorial-qa':                 'editorial-qa.zip',
  'logic-police':                 'logic-police.zip',
  'linkedin-thought-leader-30':   'linkedin-thought-leader-30.zip',
  'communicate-like-a-ceo':       'communicate-like-a-ceo.zip',
  'coordinator-to-owner':         'coordinator-to-owner.zip',
  'delegation-brief':             'delegation-brief.zip',
  'meetings-that-earn-their-hour':'meetings-that-earn-their-hour.zip',
  'learning-curve-destroyer':     'learning-curve-destroyer.zip',
  'build-your-own-skill':         'build-your-own-skill.zip',
  'image-metadata':               'image-metadata.zip',
};

module.exports = async function handler(req, res) {
  const { session_id } = req.query;
  if (!session_id) return res.status(400).send('Missing session_id');

  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(session_id);
  } catch (err) {
    console.error('Stripe retrieve error:', err.message);
    return res.status(400).send('Invalid session');
  }

  if (session.payment_status !== 'paid') return res.status(402).send('Payment not completed');

  const skillId = session.metadata?.skillId;
  const zipFile = SKILL_ZIP_MAP[skillId];
  if (!zipFile) return res.status(400).send('Unknown skill');

  const zipPath = path.join(process.cwd(), '_skills', zipFile);
  if (!fs.existsSync(zipPath)) {
    console.error('Zip not found:', zipPath);
    return res.status(503).send(
      'Download file not ready. Please email sarah@evans-global.com with your order ID: ' + session.id
    );
  }

  res.setHeader('Content-Type', 'application/zip');
  res.setHeader('Content-Disposition', `attachment; filename="${zipFile}"`);
  res.setHeader('Cache-Control', 'no-store');

  const stream = fs.createReadStream(zipPath);
  stream.pipe(res);
  stream.on('error', (err) => { console.error('Stream error:', err.message); res.status(500).end(); });
};
