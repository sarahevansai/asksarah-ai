# AGI Outlet Monitoring — n8n Deployment Guide
**Version:** 2.0 — Complete  
**Last Updated:** 2026-03-23  
**Workflow File:** `n8n-agi-monitoring-COMPLETE.json`

---

## Prerequisites

| Requirement | Details |
|---|---|
| n8n version | ≥ 1.30.0 (self-hosted or cloud) |
| Node.js | ≥ 18.x (for `fetch` built-in support) |
| Twitter API | Developer account with v2 access (see credentials guide) |
| Telegram Bot | BotFather token + your chat ID |
| Disk space | ~500MB/month for raw data |

---

## Schedule

**Runs:** Daily at 3:00 AM ET (8:00 AM UTC)  
**Frequency:** Once per 24 hours

---

## Step 1 — Prepare File System

These directories must exist and be **writable by the n8n process**:

```bash
# Base project directory
mkdir -p /Users/sarahevans_zen/.openclaw/workspace/projects/asksarah-ai/data/dashboard-stories
mkdir -p /Users/sarahevans_zen/.openclaw/workspace/projects/asksarah-ai/data/logs
mkdir -p /Users/sarahevans_zen/.openclaw/workspace/projects/asksarah-ai/data/errors
mkdir -p /Users/sarahevans_zen/.openclaw/workspace/projects/asksarah-ai/data/raw-coverage

# Verify the outlet list and accuracy DB are in place
ls /Users/sarahevans_zen/.openclaw/workspace/projects/asksarah-ai/agi-outlet-list.json
ls /Users/sarahevans_zen/.openclaw/workspace/projects/asksarah-ai/data/accuracy-db.json
```

If n8n runs in Docker, you'll need volume mounts — see **Docker section** below.

---

## Step 2 — Import the Workflow

### Option A: n8n Web UI
1. Open your n8n instance
2. Click **Workflows** in the left sidebar
3. Click **Import from file** (top-right button)
4. Select `n8n-agi-monitoring-COMPLETE.json`
5. Click **Import**

### Option B: n8n CLI
```bash
n8n import:workflow --input=/path/to/n8n-agi-monitoring-COMPLETE.json
```

### Option C: n8n REST API
```bash
curl -X POST http://localhost:5678/api/v1/workflows \
  -H "Content-Type: application/json" \
  -H "X-N8N-API-KEY: your-n8n-api-key" \
  -d @n8n-agi-monitoring-COMPLETE.json
```

---

## Step 3 — Configure Environment Variables

In n8n Settings → **Environment Variables** (or your `.env` file):

```bash
# Required for Twitter/X amplification tracking
TWITTER_BEARER_TOKEN=your_bearer_token_here

# Required for Telegram alerts
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=8206233476
```

> **Without TWITTER_BEARER_TOKEN**: Workflow still runs — deduplication, RSS polling, and dashboard writes all work. Only amplification tracking is skipped.
> 
> **Without TELEGRAM_BOT_TOKEN**: Alerts are skipped silently. Dashboard files still write.

### Setting env vars in n8n:
- **Self-hosted:** Add to your `.env` file (same directory as n8n start command) or set in your system environment
- **n8n Cloud:** Settings → Environments → Add Variable
- **Docker:** Pass via `-e TWITTER_BEARER_TOKEN=xxx` or `environment:` in docker-compose

---

## Step 4 — Verify Node Settings

After importing, check these nodes in the workflow editor:

### "Load Outlet List (110 Outlets)"
- Confirm the `OUTLET_PATH` constant matches your actual file path
- Default: `/Users/sarahevans_zen/.openclaw/workspace/projects/asksarah-ai/agi-outlet-list.json`

### "Write Dashboard JSON"
- Confirm `DASHBOARD_DIR` matches your data path
- Default: `/Users/sarahevans_zen/.openclaw/workspace/projects/asksarah-ai/data/dashboard-stories`

### "Write Success Log"
- Confirm `LOG_DIR` matches
- Default: `/Users/sarahevans_zen/.openclaw/workspace/projects/asksarah-ai/data/logs`

---

## Step 5 — Test Run

**Before activating the schedule, do a manual test run:**

1. Open the workflow in n8n editor
2. Click **Execute Workflow** (play button)
3. Watch the execution panel on the right
4. Expected progression:
   - ✅ Schedule Trigger → outputs 1 item
   - ✅ Load Outlet List → outputs ~108 items (outlets with RSS)
   - ✅ Fetch RSS Feed → outputs ~108 items (some may fail — that's OK)
   - ✅ Parse RSS Articles → outputs ~108 items with `articles: []` arrays
   - ✅ Deduplicate Stories → outputs stats item + deduplicated story items
   - ✅ Filter Story Items → outputs story items only
   - ✅ Twitter Search → outputs stories with `top_voices` (empty if no token)
   - ✅ Write Dashboard JSON → writes to disk, returns major_stories
   - ✅ Telegram Alerts → sends alerts or logs "no major stories"
   - ✅ Write Success Log → appends to log file

5. After test run, check:
```bash
ls -la /path/to/data/dashboard-stories/
cat /path/to/data/dashboard-stories/dashboard-stories-latest.json | python3 -m json.tool | head -50
```

---

## Step 6 — Activate Schedule

1. In the workflow editor, toggle **Active** (top-right switch) to ON
2. The workflow will now auto-run every 6 hours at 00:00, 06:00, 12:00, 18:00 UTC
3. Check **Executions** tab to monitor runs

---

## Docker Deployment

If n8n runs in Docker, you need bind mounts:

```yaml
# docker-compose.yml
version: '3.8'
services:
  n8n:
    image: docker.n8n.io/n8nio/n8n:latest
    ports:
      - "5678:5678"
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=yourpassword
      - TWITTER_BEARER_TOKEN=${TWITTER_BEARER_TOKEN}
      - TELEGRAM_BOT_TOKEN=${TELEGRAM_BOT_TOKEN}
      - TELEGRAM_CHAT_ID=8206233476
      # Allow n8n to write files (needed for Code nodes using fs)
      - NODE_FUNCTION_ALLOW_BUILTIN=fs,path,crypto,os
      - NODE_FUNCTION_ALLOW_EXTERNAL=*
    volumes:
      - n8n_data:/home/node/.n8n
      # Mount the project directory so Code nodes can read/write
      - /Users/sarahevans_zen/.openclaw/workspace/projects/asksarah-ai:/Users/sarahevans_zen/.openclaw/workspace/projects/asksarah-ai
volumes:
  n8n_data:
```

> **Critical Docker note:** n8n Code nodes use `fs` (Node.js file system). The paths in the code must match the container paths. The volume mount above maps the host path to the same container path, keeping all paths consistent.

---

## File System Configuration (n8n Self-Hosted)

For Code nodes to use `require('fs')`, add to your n8n environment:

```bash
# In .env or system environment
NODE_FUNCTION_ALLOW_BUILTIN=fs,path,crypto,os
NODE_FUNCTION_ALLOW_EXTERNAL=*
```

Or in n8n config:
```bash
export N8N_NODE_FUNCTION_ALLOW_BUILTIN=fs,path,crypto,os
```

---

## Output Files

| File | Written By | Purpose |
|---|---|---|
| `data/dashboard-stories/dashboard-stories-YYYY-MM-DD.json` | Write Dashboard node | Daily dashboard data |
| `data/dashboard-stories/dashboard-stories-latest.json` | Write Dashboard node | Always-current pointer |
| `data/logs/monitoring-log-YYYY-MM-DD.json` | Write Success Log node | Run history |
| `data/errors/errors-YYYY-MM-DD.json` | Error Handler node | Error log |

---

## Monitoring & Maintenance

### Check today's log:
```bash
cat data/logs/monitoring-log-$(date +%Y-%m-%d).json | python3 -m json.tool
```

### Check story count:
```bash
cat data/dashboard-stories/dashboard-stories-latest.json | python3 -c "import sys,json; d=json.load(sys.stdin); print(f'Stories: {d[\"total_stories\"]}, Major: {d[\"major_stories\"]}')"
```

### Check errors:
```bash
cat data/errors/errors-$(date +%Y-%m-%d).json 2>/dev/null || echo "No errors today"
```

### Monitor n8n execution from CLI:
```bash
n8n list:executions
```

---

## Rate Limiting Strategy

The workflow implements several rate limit protections:

| Layer | Protection |
|---|---|
| RSS Fetching | n8n's built-in item batching (sequential per outlet) |
| RSS Timeouts | 15s per outlet, max 3 retries with 2s delay |
| Twitter API | Max 40 calls per run, 1.1s delay between calls |
| Twitter stop | Auto-stops on 429 response |
| Outlet cutoff | Only stories from last 48h (tier 1-2) or 7 days (tier 3-6) |

Twitter v2 "Essential" access: 500,000 tweets/month, 300 requests/15 min. At 40 calls per run × 4 runs/day = 160 calls/day = well within limits.

---

## Customization

### Change alert threshold (currently >10 sources):
In "Send Telegram Alerts" code node, find:
```javascript
const majorStories = item.major_stories || [];
```
And in "Write Dashboard JSON", find:
```javascript
alert_level: s.source_count >= 10 ? 'major'
```
Change `10` to your desired threshold.

### Add new AGI voices:
Edit the `ACCURACY_DB` object inside "Twitter Search + Credibility Scoring" node, or update `accuracy-db.json` and reload.

### Adjust time window:
In "Parse RSS Articles" node:
```javascript
const cutoffHours = tier <= 2 ? 48 : 168;  // Change these
```

### Disable Twitter (RSS-only mode):
Simply don't set `TWITTER_BEARER_TOKEN`. The workflow gracefully skips Twitter calls.

---

## Troubleshooting

| Symptom | Likely Cause | Fix |
|---|---|---|
| `Cannot find module 'fs'` | NODE_FUNCTION_ALLOW_BUILTIN not set | Add env var as shown above |
| `ENOENT` on file write | Directory doesn't exist or wrong permissions | Run `mkdir -p` commands in Step 1 |
| All RSS feeds failing | Network issue or wrong URL | Check n8n can reach internet, verify one RSS URL manually |
| Twitter returns 401 | Invalid bearer token | Re-check token, ensure no leading/trailing spaces |
| Twitter returns 403 | App doesn't have v2 access | Upgrade Twitter developer app to "Elevated" |
| 0 stories in dashboard | All RSS parsing failed | Open n8n execution, inspect "Parse RSS Articles" node output |
| Telegram alerts not sending | Wrong chat ID or bot token | Test bot with curl: `curl https://api.telegram.org/botTOKEN/getMe` |

---

## Production Checklist

Before going live:

- [ ] All directories created with correct permissions
- [ ] `agi-outlet-list.json` in place (110 outlets)
- [ ] `data/accuracy-db.json` in place (18 voices)
- [ ] `TWITTER_BEARER_TOKEN` configured
- [ ] `TELEGRAM_BOT_TOKEN` + `TELEGRAM_CHAT_ID` configured
- [ ] Manual test run completed successfully
- [ ] Dashboard JSON file written and readable
- [ ] At least one Telegram alert received (or confirmed skipped on no major stories)
- [ ] Error handler tested (can trigger manually via n8n)
- [ ] Workflow set to **Active**
- [ ] First scheduled run confirmed in Executions tab
