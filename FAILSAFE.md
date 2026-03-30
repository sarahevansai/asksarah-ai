# asksarah.ai FAILSAFE PROTOCOL

## CRITICAL RULE: SITE MUST ALWAYS BE PUBLIC

**asksarah.ai must NEVER be down, password-protected, or behind any authentication wall.**

## Deployment Protection: DISABLED
- Vercel deployment protection is OFF
- No authentication required to access the site
- Site is always public and always available

## Backup & Recovery
- Source code backed up on GitHub: https://github.com/sarahevansai/asksarah-ai
- Production backup branch maintained for instant recovery
- Latest deployment URL: https://asksarah-l9mlu0pry-sarahevansopenclaw-5009s-projects.vercel.app
- Custom domain: asksarah.ai (aliased to production deployment)

## If Site Goes Down
1. Check deployment status: `npx vercel ls`
2. If latest deployment is broken, redeploy from previous working version
3. Never merge broken code to main
4. If domain fails, update Vercel alias immediately

## Deployment Protocol
- All pushes to `main` automatically deploy to production
- No manual approval gates that could block deployment
- Rollback to previous version if needed (within 24 hours)

## What NOT To Do
- ❌ Add authentication/protection to production
- ❌ Delete or archive the Vercel project
- ❌ Change domain settings without immediate verification
- ❌ Deploy unbuilt code or incomplete features
- ❌ Leave site protected during any configuration change

## Kai's Responsibility
- Monitor site availability daily
- If protection is ever re-enabled, disable immediately
- Test domain access weekly
- Maintain GitHub backup branch
- Never consolidate projects that could cause data loss

---

**Last updated:** March 30, 2026, 9:38 AM PT
**Status:** Site is live and public
