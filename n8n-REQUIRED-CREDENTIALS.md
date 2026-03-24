# AGI Monitoring — Required Credentials & API Keys
**Workflow:** AGI Outlet Monitoring Pipeline v2  
**Last Updated:** 2026-03-23

---

## Summary Table

| Credential | Required? | Used For | Where to Get |
|---|---|---|---|
| `TWITTER_BEARER_TOKEN` | Optional* | Amplification tracking | developer.twitter.com |
| `TELEGRAM_BOT_TOKEN` | Optional* | Story alerts | @BotFather on Telegram |
| `TELEGRAM_CHAT_ID` | Optional* | Targeting alerts | See instructions below |

> *Optional = workflow runs without them. Just those features are skipped.

---

## 1. Twitter/X API v2 — Bearer Token

### What it does
Searches Twitter for story URLs and headline mentions. Identifies which AGI voices (Yann LeCun, Sam Altman, Demis Hassabis, etc.) are amplifying each story. Calculates weighted credibility scores.

### How to get it

1. Go to [developer.twitter.com](https://developer.twitter.com/en/portal/dashboard)
2. Sign in with your Twitter/X account
3. Click **+ Add App** or **Create Project**
4. Fill in app details:
   - App name: `agi-outlet-monitor` (or any name)
   - Use case: "Academic research" or "Monitoring news trends"
5. After creation, go to **Keys and Tokens**
6. Copy the **Bearer Token** (starts with `AAAA...`)

### Access level needed
- **Essential** (free) — 500K tweets/month, sufficient for this workflow
- **Basic** ($100/mo) — if you need higher volume
- Do NOT need read-write permissions; read-only is sufficient

### Where to set it
```bash
# In n8n environment
TWITTER_BEARER_TOKEN=AAAAAAAAAAAAAAAAAAAAAxxxxx...
```

### Rate limits for this workflow
- 40 Twitter API calls per 6-hour run
- 160 calls/day total
- Well within Essential (500K tweets/month cap)

---

## 2. Telegram Bot Token

### What it does
Sends real-time alerts to your Telegram when stories hit 10+ sources (configurable). Alert format:
```
📰 AGI Story Alert

*OpenAI announces GPT-5 with AGI capabilities*

🔊 14 sources · Top: Sam Altman, Yann LeCun, Demis Hassabis
🔗 https://techcrunch.com/...

📡 Sources: TechCrunch, Wired, MIT Tech Review, Ars Technica, VentureBeat +9 more
```

### How to create a Telegram Bot

1. Open Telegram and search for **@BotFather**
2. Send `/newbot`
3. Follow prompts:
   - Bot name: `AGI Monitor` (display name)
   - Username: `agi_outlet_monitor_bot` (must end in `bot`)
4. BotFather sends you a token like: `7234567890:AAHxxx...`
5. Copy and save it

### How to get your Chat ID (Sarah's Telegram)

**Option A — Direct chat:**
1. Open Telegram, start a chat with your new bot (search `@agi_outlet_monitor_bot`)
2. Send any message to it
3. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
4. Find `"chat":{"id":...}` in the response — that's your chat ID

**Option B — Already known:**
Sarah's Telegram Chat ID is already set to `8206233476` in the workflow.

**Option C — Group chat:**
Add the bot to a group → use the group's negative ID (e.g., `-1001234567890`).

### Where to set it
```bash
TELEGRAM_BOT_TOKEN=7234567890:AAHxxx...
TELEGRAM_CHAT_ID=8206233476
```

---

## 3. No-Credential APIs (Used Automatically)

These APIs are called without credentials and are already configured in the workflow:

### arXiv API
- **Used for:** Academic paper feeds (`arxiv_ai` outlet)
- **Endpoint:** `https://arxiv.org/rss/cs.AI`
- **Key needed:** None

### Guardian Open Platform
- **Used for:** `the_guardian_tech` outlet
- **Endpoint:** `https://www.theguardian.com/technology/rss`
- **Key needed:** None (RSS mode, no API key required for RSS)
- **Optional enhancement:** Get free API key at [open-platform.theguardian.com](https://open-platform.theguardian.com/) for higher rate limits

### HuggingFace Blog
- **Endpoint:** `https://huggingface.co/blog/feed.xml`
- **Key needed:** None

### Papers With Code
- **Endpoint:** `https://paperswithcode.com/rss.xml`
- **Key needed:** None (RSS mode)
- **Optional API:** [paperswithcode.com/api/v1](https://paperswithcode.com/api/v1) — free, no key

### Semantic Scholar
- **Endpoint:** RSS not available; this outlet is tracked via curated mentions
- **Optional API:** `api.semanticscholar.org/graph/v1` — free, no key for basic use

---

## 4. Paywalled Outlets — Notes

These outlets are in the outlet list but RSS access may be limited:

| Outlet | Paywall Level | What You Get Free |
|---|---|---|
| Bloomberg Tech | Hard paywall | Headlines only via RSS |
| Wall Street Journal | Hard paywall | Some headlines via RSS |
| Financial Times | Hard paywall | Some headlines via RSS |
| The Information | Subscription | Very limited RSS |
| Stratechery | Partial paywall | Free posts via RSS |
| MIT Tech Review | Soft paywall | Some articles free |
| Nature | Soft paywall | Abstracts via RSS |

**Impact:** The workflow will still collect headlines and metadata from paywalled sources via RSS — just not full article text. Source counting still works correctly.

---

## 5. Optional: n8n API Key (for programmatic import)

If you want to import the workflow via REST API (not the UI):

1. In n8n Settings → API → Create API Key
2. Copy the key
3. Use in curl/script:
```bash
curl -X POST http://localhost:5678/api/v1/workflows \
  -H "X-N8N-API-KEY: your-n8n-api-key" \
  -H "Content-Type: application/json" \
  -d @n8n-agi-monitoring-COMPLETE.json
```

---

## Quick Setup Checklist

```
[ ] Twitter Developer account created
[ ] Bearer Token copied from developer.twitter.com
[ ] TWITTER_BEARER_TOKEN added to n8n environment

[ ] Telegram bot created via @BotFather
[ ] Bot token copied
[ ] TELEGRAM_BOT_TOKEN added to n8n environment
[ ] TELEGRAM_CHAT_ID confirmed (8206233476 or your group ID)

[ ] Test alert sent: curl https://api.telegram.org/botTOKEN/sendMessage \
      -d chat_id=CHAT_ID -d text="test"

[ ] Twitter test: curl -H "Authorization: Bearer TOKEN" \
      "https://api.twitter.com/2/tweets/search/recent?query=AGI&max_results=5"
```

---

## Security Notes

1. **Never commit tokens to git** — Add `*.env` to `.gitignore`
2. **Rotate tokens every 90 days** (especially Twitter)
3. **Twitter Essential access** is free but requires a phone number on your developer account
4. **Telegram bot tokens** can be regenerated via @BotFather with `/revoke` if compromised
5. **n8n environment variables** are stored encrypted in n8n's internal database
