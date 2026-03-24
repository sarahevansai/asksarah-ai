# AGI Outlet Monitoring System — Deployment Checklist

**Status:** Ready for Phase 2 (n8n workflow build)  
**Last Updated:** 2026-03-23, 7:05 AM PT

---

## ✅ Phase 1: Research (COMPLETE)

- [x] 110 outlets identified across 6 tiers
- [x] RSS feeds documented (~105 outlets)
- [x] API methods mapped (12 direct APIs)
- [x] Scraping methods identified for paywalled/custom
- [x] Geographic diversity verified
- [x] Bias spectrum mapped
- [x] Machine-readable JSON: `agi-outlet-list.json`
- [x] Human-readable audit: `AGI_OUTLETS_AUDIT.md`

---

## ⏳ Phase 2: n8n Workflow Build (READY TO START)

### 2.1 Data Collection Layer
**What:** Poll 110 outlets every 6 hours via RSS/API/scraping

**Work:**
- [ ] Implement RSS polling node (105 outlets)
- [ ] Implement API nodes (12 outlets with direct APIs)
- [ ] Implement web scraping fallback (paywalled outlets)
- [ ] Error handling + retry logic
- [ ] Rate limiting (don't hammer small outlets)

**Outputs:**
- Raw articles: `/data/raw-coverage/YYYY-MM-DD/*.json`
- Metrics: articles pulled, success rate, errors

**Estimated effort:** 8 hours (1 day)

---

### 2.2 Deduplication Layer
**What:** Find same story reported by multiple outlets

**Work:**
- [ ] Implement story ID generation (SHA256 hash of headline + date)
- [ ] Deduplicate by story ID
- [ ] Count unique sources per story
- [ ] Group by topic/theme

**Outputs:**
- Deduped stories: `/data/deduped-stories/YYYY-MM-DD-stories.json`
- Format:
```json
{
  "story_id": "abc123...",
  "headline": "...",
  "first_reported": "2026-03-23T12:30:00Z",
  "source_count": 12,
  "sources": ["techcrunch", "ai_journal", "venturebeat", ...],
  "top_tier_count": 3
}
```

**Estimated effort:** 4 hours (0.5 day)

---

### 2.3 Amplification Tracking Layer
**What:** Track who amplifies each story on social media

**Work:**
- [ ] Get Twitter API v2 credentials + rate limits
- [ ] Search for story URLs on Twitter
- [ ] Extract author, follower count, engagement metrics
- [ ] Filter for known AGI voices (from accuracy-db.json)
- [ ] Calculate weighted reach: followers × engagement_rate

**Outputs:**
- Social mentions: `/data/amplification/YYYY-MM-DD-social.json`
- Format:
```json
{
  "story_id": "abc123...",
  "amplifiers": [
    {
      "name": "Yann LeCun",
      "handle": "@ylecun",
      "followers": 12000000,
      "engagement": 89000,
      "engagement_rate": 0.0074,
      "weighted_reach": 88800
    }
  ],
  "total_reach": 3500000
}
```

**Estimated effort:** 6 hours (0.75 day)

---

### 2.4 Accuracy + Credibility Scoring
**What:** Weight amplifiers by historical accuracy

**Work:**
- [ ] Reference accuracy-db.json for each voice
- [ ] Calculate weighted_credibility = weighted_reach × accuracy_score
- [ ] Sort by credibility (not just reach)
- [ ] Top 3–5 voices per story

**Outputs:**
- Credible voices: injected into story JSON
- Format:
```json
{
  "story_id": "abc123...",
  "top_voices": [
    {
      "name": "Jensen Huang",
      "accuracy_score": 0.92,
      "weighted_credibility": 81656
    }
  ]
}
```

**Estimated effort:** 2 hours (0.25 day) — mostly configuration

---

### 2.5 Dashboard Integration
**What:** Inject source counts + top voices into dashboard news cards

**Work:**
- [ ] Read deduped-stories JSON
- [ ] Match stories to dashboard news cards (by URL)
- [ ] Add "X sources · Top voices: A, B, C" to each card
- [ ] Update dashboard data file for frontend to consume

**Outputs:**
- Enhanced dashboard data: `/data/dashboard-ready-stories.json`
- Format: Original news card + source_count + top_voices

**Estimated effort:** 4 hours (0.5 day)

---

### 2.6 Automation + Alerting
**What:** Run workflow on schedule, send alerts to Sarah

**Work:**
- [ ] n8n cron trigger: every 6 hours (00:00, 06:00, 12:00, 18:00 UTC)
- [ ] Telegram notification on major stories (>10 sources)
- [ ] Daily digest option (all stories from last 24h)
- [ ] Error notifications (if workflow fails)

**Estimated effort:** 2 hours (0.25 day)

---

## Phase 2 Summary

**Total implementation effort:** ~26 hours (3–4 days full-time)

**Can be broken into:**
- Day 1: Data collection layer (8h)
- Day 2: Deduplication + amplification (10h)
- Day 3: Accuracy scoring + integration (8h)

**Tools needed:**
- n8n instance (local or cloud)
- Twitter API v2 credentials (free tier ok)
- Node.js for custom code nodes (Cheerio for scraping)
- File storage (JSON files ok for now, 100K stories/year = 500MB)

---

## ⏳ Phase 3: Optimization & Leaderboard (FUTURE)

Once Phase 2 is live and stable:
- [ ] Add leaderboard section to dashboard (top 20 most credible voices)
- [ ] Track prediction accuracy over time (update accuracy-db.json quarterly)
- [ ] Add topic filtering (AGI timeline vs. AI safety vs. funding news)
- [ ] Historical analysis (which voices saw trends earliest?)
- [ ] Source diversity scoring (penalize if 80% from one tier)

---

## Decision Point

**Question for Sarah:** Should we:

**Option A:** Build Phase 2 now (3–4 days work) to get live monitoring + source counts + top voices on dashboard

**Option B:** Start with simplified MVP (just source counts, no social tracking) to ship faster

**Option C:** Queue it up and focus on other priorities first

Current recommendation: **Option A** — The infrastructure is designed, the outlet list is done, and the n8n workflow skeleton is ready. Worth pushing through to get a live, credible source-tracking system.

---

**Files ready for deployment:**
- `agi-outlet-list.json` ✅
- `accuracy-db.json` ✅
- `n8n-agi-monitoring-workflow.json` ✅ (skeleton ready for fleshing out)
- `agi-monitoring-system.md` ✅ (architecture doc)

**What's needed to start:**
1. Go/no-go from Sarah
2. Twitter API v2 credentials (if doing social tracking)
3. n8n instance access (can use OpenClaw's existing n8n if available)

