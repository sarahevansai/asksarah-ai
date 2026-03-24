# AGI Outlet Monitoring System — Architecture

**Status:** Phase 1 (Research) + Phase 2 (Infrastructure) — In Progress

## Overview

Real-time tracking of AGI coverage across 100+ outlets. For each story:
- Count sources reporting it
- Identify top amplifiers (by reach × accuracy)
- Track sentiment + credibility

## Architecture Layers

### Layer 1: Source Discovery (Sonnet researching)
- 110 outlets in machine-readable format (JSON)
- RSS feeds, APIs, scraping methods documented
- Tier classification (major → niche)
- Geographic + topic coverage mapped

### Layer 2: Data Collection (n8n workflow)
**Inputs:**
- agi-outlet-list.json (110 outlet definitions)
- Cron schedule: Daily at 3:00 AM ET (8:00 AM UTC)

**Process:**
1. Poll RSS feeds / APIs / scrape pages
2. Extract: headline, URL, publication date, author, summary
3. Store raw data: `/data/raw-coverage/YYYY-MM-DD/*.json`
4. Deduplicate stories (same event, different outlets)

**Output:** 
```json
{
  "story_id": "sha256(headline + date)",
  "headline": "...",
  "first_reported": "2026-03-23T12:30:00Z",
  "sources": [
    {"outlet_id": "techcrunch", "url": "...", "published": "...", "tier": 1},
    {"outlet_id": "ai_journal", "url": "...", "published": "...", "tier": 2}
  ],
  "source_count": 12,
  "top_tier_count": 3
}
```

### Layer 3: Amplification Tracking
**Inputs:**
- Story URLs from Layer 2
- Twitter/LinkedIn/Medium API access

**Process:**
1. Search for mentions of story URL across social
2. Extract: author handle, follower count, engagement (likes + RTs), timestamp
3. Filter for AGI figures (Yann, Sam, Demis, etc.)
4. Calculate weighted reach: followers × engagement_rate

**Output:**
```json
{
  "story_id": "...",
  "amplifiers": [
    {
      "name": "Yann LeCun",
      "handle": "@ylecun",
      "followers": 12000000,
      "engagement_rate": 0.089,
      "weighted_reach": 1068000,
      "accuracy_score": 0.87,
      "weighted_credibility": 0.77
    }
  ],
  "total_reach": 3500000
}
```

### Layer 4: Accuracy Tracking
**Inputs:**
- Historical predictions from key figures (Yann, Sam, Demis, etc.)
- Actual outcomes (timelines, breakthroughs)

**Process:**
1. Build prediction database: "Yann said AGI in 2025, now it's 2026, how accurate?"
2. Score: correct / (correct + incorrect) over 5-year window
3. Weight by specificity (vague predictions vs. concrete dates)

**Output:**
```json
{
  "voice_id": "yann_lecun",
  "name": "Yann LeCun",
  "predictions_tracked": 47,
  "accuracy_score": 0.87,
  "specificity_score": 0.72,
  "credibility_rating": 0.77,
  "last_updated": "2026-03-23"
}
```

### Layer 5: Dashboard Integration
**For each news card:**
- Display source count (from Layer 2)
- Show top 3 amplifiers by weighted credibility (from Layers 3 + 4)
- Link to original sources

**Example card output:**
```
Headline: "Yann LeCun Raises $1.03B for AMI Labs"
Sources: 12 outlets (Tier 1: 3, Tier 2: 5, Tier 3: 4)
Top voices: 
  - Yann LeCun (12M followers, 87% accuracy)
  - Sam Altman (8M followers, 91% accuracy)
  - Demis Hassabis (2M followers, 84% accuracy)
```

## Implementation Timeline

### Week 1 (Mar 23–29)
- [ ] Sonnet: Complete 100+ outlet research + JSON structure
- [ ] Kai: Build n8n workflow for RSS/API polling
- [ ] Kai: Set up raw data storage layer

### Week 2 (Mar 30–Apr 5)
- [ ] Kai: Build deduplication logic
- [ ] Kai: Implement Twitter/LinkedIn API scraping for amplification
- [ ] Kai: Seed accuracy database with 20+ key figures

### Week 3 (Apr 6–12)
- [ ] Kai: Dashboard integration (source count + top voices per card)
- [ ] Kai: Cron automation (daily pull + processing)
- [ ] Testing + refinement

### Week 4+ (Apr 13+)
- [ ] Ongoing maintenance (accuracy tracking, outlet list updates)
- [ ] Leaderboard expansion (broader than just news cards)

## Data Storage

```
/projects/asksarah-ai/
├── agi-outlet-list.json (100+ outlets, machine-readable)
├── agi-monitoring-system.md (this file)
├── data/
│   ├── raw-coverage/
│   │   ├── 2026-03-23/
│   │   │   ├── techcrunch-001.json
│   │   │   ├── ai-journal-001.json
│   │   │   └── ...
│   ├── deduped-stories/
│   │   ├── 2026-03-23-stories.json
│   ├── amplification/
│   │   ├── 2026-03-23-social-mentions.json
│   ├── accuracy-db.json (historical predictions + outcomes)
```

## Tools & Services

- **Data Collection:** n8n (RSS/API polling), Cheerio (scraping)
- **Social Tracking:** Twitter API v2, LinkedIn API (if available)
- **Storage:** JSON files (git-backed) or Supabase (if scaling needed)
- **Automation:** Cron jobs (OpenClaw)
- **Dashboard:** Existing asksarah.ai frontend (add new sections)

## Success Metrics

- [ ] 100+ outlets monitored successfully
- [ ] <30 min latency from first report to dashboard update
- [ ] Source count visible on every news card
- [ ] Top 3 amplifiers + accuracy scores showing
- [ ] Zero false duplicates (same story counted once)
- [ ] Accuracy database tracks 20+ key figures

## Notes

- **Privacy:** No personal data scraping beyond public social posts
- **Bias:** Tier classification ensures geographic + topic diversity
- **Scalability:** JSON-based now, can migrate to Supabase if >100K stories/month
- **Maintenance:** Outlet list reviewed monthly, accuracy DB updated quarterly

---

**Next Step:** Wait for Sonnet research output, then begin Layer 2 n8n workflow build.
