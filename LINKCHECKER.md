# 🔗 Link Checker Quick Start Guide

The OrionRobots link checker helps identify broken links with a focus on images and internal links.

## 🚀 Quick Usage

### For Local Development
```bash
# Run complete link check locally
./.github/scripts/local_linkcheck.sh
```

### For Pull Requests

1. Add the `link-check` label to your PR
2. The system will automatically:
   - Build your changes
   - Deploy to a test environment
   - Run link checking
   - Comment results on your PR

### For Production Monitoring

- Runs automatically every night at 2 AM UTC
- Reports available in GitHub Actions artifacts
- Warnings created for broken links

## 📊 Report Categories

Reports prioritize links by importance:

- 🖼️ **Images** (High): Broken images affecting visual content
- 🏠 **Internal** (High): Broken internal links under our control
- 🌐 **External** (Medium): Broken external links (may be temporary)
- 📧 **Email** (Low): Broken email links (complex validation)

## 🔧 Manual Docker Usage

```bash
# Build and serve site
docker compose --profile manual up -d http_serve

# Run link checker
docker compose --profile manual up broken_links

# View reports
open linkchecker_reports/link_check_report.html

# Cleanup
docker compose down
```

## 📁 Generated Files

- `linkchecker_reports/link_check_report.html` - Styled HTML report
- `linkchecker/output.csv` - Raw CSV data for analysis

For detailed configuration and troubleshooting, see [linkchecker/README.md](linkchecker/README.md).
