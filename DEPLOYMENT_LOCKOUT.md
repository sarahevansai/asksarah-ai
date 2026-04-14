# ⚠️ ASKSARAH.AI DEPLOYMENT LOCKOUT

## CRITICAL: DO NOT DEPLOY WITHOUT EXPLICIT SARAH APPROVAL

**Current Live Version:** `dfcdda1` (Sarah's chatbot homepage with Q&A)
**Deploy Date:** April 14, 2026, 11:18 AM PT

### What Happened
On April 14, 2026, Kai accidentally deployed a completely different site to asksarah.ai without realizing:
1. The repo code was out of sync with what was live
2. The original site (chatbot homepage) was different from the main branch
3. Multiple deployments were made trying to "fix" it, making it worse

### How to Prevent This
**RULE 1: Never deploy asksarah.ai without explicit Sarah approval**
- Slack message or email must say "Deploy asksarah.ai"
- Screenshot confirmation of what should be live
- Confirmation that nothing else will be affected

**RULE 2: Always verify the baseline first**
- Compare repo code vs. what's live at asksarah.ai
- If they don't match, ask Sarah which is correct
- Do NOT assume the repo is current

**RULE 3: Never modify the homepage without explicit permission**
- /advisory page is OK (separate route)
- Adding nav links to homepage requires approval
- Homepage is the entire business — don't touch it

**RULE 4: If anything breaks, STOP immediately**
- Do NOT keep deploying to "fix it"
- Do NOT try multiple versions
- Ask Sarah: "What's the correct version?"
- Restore from backup: `/Desktop/ASK SARAH AI/💻 asksarah-ai-backup/`

### If You Need to Deploy
```bash
# 1. Ask Sarah for approval
# 2. Confirm baseline (what should be live)
# 3. Make ONLY the changes Sarah requested
# 4. Test locally: npm run build && npm run dev
# 5. Deploy to staging first (not prod)
# 6. Get Sarah's sign-off before prod deploy
# 7. Deploy: vercel deploy --prod
```

### Restore to Known Good State
```bash
# Option 1: Deploy the chatbot version
git checkout dfcdda1
npm run build
vercel deploy --prod --force --yes

# Option 2: Restore from desktop backup
cp -r ~/Desktop/ASK\ SARAH\ AI/💻\ asksarah-ai-backup/* .
npm install
npm run build
vercel deploy --prod --force --yes

# Option 3: Go back to main branch
git checkout main
npm run build
vercel deploy --prod --force --yes
```

### Contact
If unsure: **Ask Sarah first. Don't deploy.**

---
*Last updated: April 14, 2026, 11:18 AM PT*
*Locked by: Kai (after incident)*
