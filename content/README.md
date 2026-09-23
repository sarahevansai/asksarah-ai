# Content

Everything on the new AskSarah pages comes from the files in this folder.
Edit a file, commit it, and the pages rebuild on their own (GitHub Action),
then Vercel deploys them.

## Adding something

1. Copy the matching file from `_templates/` into its folder
   (`skills/`, `packs/`, `stack/`, `ai-uses/`, `shortcuts/`, `systems/`, `edit/`).
2. Name the file after its slug: `skills/pack-my-suitcase.json`.
3. Fill it in. Empty fields don't show up on the page, so leave blank anything you don't have yet.
4. Keep `"published": false` until it's ready. Drafts never appear on the site.

Or use Pages CMS (app.pagescms.org), which gives you a form for each type.

## Rules the build enforces

- A paid Skill that's `"status": "available"` must have its price in
  `api/create-checkout.js` too, or the build stops. That file is what Stripe
  actually charges, so change both together.
- `related_items` are `{ "type": "...", "slug": "..." }`. Types: `skill`, `pack`,
  `stack`, `ai-use`, `shortcut`, `system`, `edit`, `article`. Only the first 4 show,
  and anything unpublished is skipped.

## Preview locally

    node scripts/build.mjs            # what the site will look like
    DRAFTS=1 node scripts/build.mjs   # include drafts (don't commit this build)

Run a plain `node scripts/build.mjs` again before committing. It removes the draft pages.

## Homepage words

`pages/home.html`. Edit the text there. Leave the `{{...}}` placeholders in place.
