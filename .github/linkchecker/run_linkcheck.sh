#!/bin/bash
set -e

# OrionRobots Link Checker Script
echo "🔗 Starting OrionRobots Link Checker..."

SITE_URL="${1:-http://http_serve}"
OUTPUT_DIR="${2:-/linkchecker}"
MODE="${3:-normal}"  # normal, quick, or nightly
REPORT_FILE="$OUTPUT_DIR/link_check_report.html"

echo "📍 Checking site: $SITE_URL"
echo "📁 Output directory: $OUTPUT_DIR"
echo "🔧 Mode: $MODE"

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Wait for the site to be available
echo "⏳ Waiting for site to be available..."
timeout 60 bash -c 'until curl -s "$0" > /dev/null; do sleep 2; done' "$SITE_URL" || {
    echo "❌ Site not available at $SITE_URL"
    exit 1
}

echo "✅ Site is available, starting link check..."

# Always use the main config, override with CLI args for quick/nightly
CONFIG_FILE="/linkchecker/linkchecker.conf"
LINKCHECKER_CMD="linkchecker --config=$CONFIG_FILE --output=csv --file-output=csv/linkchecker/output.csv"

if [ "$MODE" = "quick" ]; then
    echo "⚡ Running in quick mode (2min max, internal links only)..."
    LINKCHECKER_CMD="$LINKCHECKER_CMD \
        --recursion-level=1 \
        --check-extern=0 \
        --max-requests-per-second=20 \
        --timeout=5 \
        --maxrunseconds=120 \
        --verbose=0 \
        --warnings=0 \
        --threads=4"
elif [ "$MODE" = "nightly" ]; then
    echo "🌙 Running nightly mode (comprehensive, no time limit)..."
    LINKCHECKER_CMD="$LINKCHECKER_CMD \
        --recursion-level=10 \
        --check-extern=1 \
        --max-requests-per-second=5 \
        --timeout=30 \
        --verbose=1 \
        --warnings=1 \
        --threads=4"
else
    echo "🔍 Running normal mode (2min max, limited external checks)..."
    LINKCHECKER_CMD="$LINKCHECKER_CMD \
        --recursion-level=2 \
        --check-extern=1 \
        --max-requests-per-second=10 \
        --timeout=10 \
        --maxrunseconds=120 \
        --verbose=1 \
        --warnings=1 \
        --threads=4"
fi

# Run linkchecker
$LINKCHECKER_CMD "$SITE_URL" || true  # Don't fail on broken links

echo "🔄 Processing results..."

# Generate HTML report
cd /linkchecker
python3 filter_csv.py output.csv > "$REPORT_FILE"

echo "📊 Link check complete!"
echo "📄 Report generated: $REPORT_FILE"

# Show summary
if [ -f "output.csv" ]; then
    total_lines=$(wc -l < output.csv)
    if [ "$total_lines" -gt 1 ]; then
        broken_count=$((total_lines - 1))  # Subtract header line
        echo "❌ Found $broken_count broken links"
        # Copy CSV to output directory for analysis
        cp output.csv "$OUTPUT_DIR/"
    else
        echo "✅ No broken links found!"
    fi
else
    echo "⚠️ No output CSV found"
fi