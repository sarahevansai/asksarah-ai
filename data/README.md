# AGI Monitoring — Data Directory Structure

```
data/
├── dashboard-stories/
│   ├── dashboard-stories-YYYY-MM-DD.json   ← Daily dashboard file (written each run)
│   ├── dashboard-stories-latest.json        ← Always points to latest run (overwritten)
│   └── dashboard-stories-SAMPLE-*.json      ← Sample files for testing
│
├── logs/
│   ├── monitoring-log-YYYY-MM-DD.json      ← Daily run log (appended each run)
│   └── monitoring-log-SAMPLE-*.json         ← Sample log files
│
├── errors/
│   └── errors-YYYY-MM-DD.json              ← Error log (appended on error)
│
├── raw-coverage/                            ← Reserved for future raw article archiving
│
└── accuracy-db.json                         ← 18 AGI voices with accuracy scores (INPUT)
```

## Dashboard File Format

The dashboard JSON is the primary output consumed by the frontend.

### Key Fields Per Story
- `story_id`: SHA256 fingerprint (16 hex chars)
- `headline`: Canonical headline (from first outlet to report)
- `source_count`: Number of unique outlets covering this story
- `alert_level`: `major` (≥10 sources) | `significant` (5-9) | `normal` (<5)
- `top_voices`: Up to 5 Twitter amplifiers ranked by weighted_credibility
- `sources`: Array of all outlets covering this story

### Alert Levels
| Level | Threshold | Action |
|-------|-----------|--------|
| major | ≥ 10 sources | Telegram alert sent immediately |
| significant | 5-9 sources | Available in dashboard |
| normal | < 5 sources | Available in dashboard |

### Dashboard Card Format
```
📰 {headline}
🔊 {source_count} sources · Top: {top_voices[0].display_name}, {top_voices[1].display_name}
🔗 {representative_url}
```

## Run Schedule
- Every 6 hours: 00:00, 06:00, 12:00, 18:00 UTC
- ~4 runs/day = up to 440 new stories tracked per day
- Deduplication typically removes 60-70% of duplicate coverage

## File Retention
Files are not auto-deleted. Implement a cron job to clean files older than 30 days:
```bash
find data/dashboard-stories -name "*.json" -mtime +30 -delete
find data/logs -name "*.json" -mtime +30 -delete
```
