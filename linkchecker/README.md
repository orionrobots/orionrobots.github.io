# OrionRobots Link Checker

This directory contains the link checking functionality for the OrionRobots website, designed to detect broken links with a focus on image links and internal broken links.

## 🎯 Features

- **Image-focused checking**: Prioritizes broken image links that affect visual content
- **Categorized results**: Separates internal, external, image, and email links
- **HTML reports**: Generates detailed, styled reports with priority indicators
- **Docker integration**: Runs in isolated containers for consistency
- **CI/CD integration**: Automated nightly checks and PR-based checks

## 🚀 Usage

### Local Usage

Run the link checker locally using the provided script:

```bash
./scripts/local_linkcheck.sh
```

This will:
1. Build the site
2. Start a local HTTP server
3. Run the link checker
4. Generate a report in `./link_reports/`
5. Clean up containers

### Manual Docker Compose

You can also run individual services manually:

```bash
# Build and serve the site
docker compose --profile manual up -d http_serve

# Run link checker
docker compose --profile manual up broken_links

# View logs
docker compose logs broken_links

# Cleanup
docker compose down
```

### GitHub Actions Integration

#### Nightly Checks
- Runs every night at 2 AM UTC
- Checks the production site (https://orionrobots.co.uk)
- Creates warnings for broken links
- Uploads detailed reports as artifacts

#### PR-based Checks
- Triggered when a PR is labeled with `link-check`
- Deploys a staging version of the PR
- Runs link checker on the staging deployment
- Comments results on the PR
- Automatically cleans up staging deployment

To run link checking on a PR:
1. Add the `link-check` label to the PR
2. The workflow will automatically deploy staging and run checks
3. Results will be commented on the PR

## 📁 Files

- `Dockerfile`: Container definition for the link checker
- `linkchecker.conf`: Configuration for linkchecker tool
- `filter_csv.py`: Python script to process and categorize results
- `output_template.html`: HTML template for generating reports
- `run_linkcheck.sh`: Main script that orchestrates the checking process

## 📊 Report Categories

The generated reports categorize broken links by priority:

1. **🖼️ Images** (High Priority): Broken image links that affect visual content
2. **🏠 Internal Links** (High Priority): Broken internal links under our control
3. **🌐 External Links** (Medium Priority): Broken external links (may be temporary)
4. **📧 Email Links** (Low Priority): Broken email links (complex to validate)

## ⚙️ Configuration

The link checker configuration in `linkchecker.conf` includes:

- **Recursion**: Checks up to 10 levels deep
- **Output**: CSV format for easy processing
- **Filtering**: Ignores common social media sites that block crawlers
- **Anchor checking**: Validates internal page anchors
- **Warning handling**: Configurable warning levels

## 🔧 Customization

To modify the link checking behavior:

1. **Change checking depth**: Edit `recursionlevel` in `linkchecker.conf`
2. **Add ignored URLs**: Add patterns to the `ignore` section in `linkchecker.conf`
3. **Modify report styling**: Edit `output_template.html`
4. **Change categorization**: Modify `filter_csv.py`

## 🐳 Docker Integration

The link checker integrates with the existing Docker Compose setup:

- Uses the `http_serve` service as the target
- Depends on health checks to ensure site availability
- Outputs reports to a mounted volume for persistence
- Runs in the `manual` profile to avoid automatic execution

## 📋 Requirements

- Docker and Docker Compose
- Python 3 with Jinja2 (handled in container)
- linkchecker tool (handled in container)
- curl for health checks (handled in container)

## 🔍 Troubleshooting

### Site not available
If you get "Site not available" errors:
1. Ensure the site builds successfully first
2. Check that the HTTP server is running
3. Verify port 8082 is not in use

### Permission errors
If you get permission errors with volumes:
1. Check Docker permissions
2. Ensure the link_reports directory exists
3. Try running with sudo (not recommended for production)

### Missing dependencies
If linkchecker fails to run:
1. Check the Dockerfile builds successfully
2. Verify Python dependencies are installed
3. Check linkchecker configuration syntax