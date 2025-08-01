#!/bin/bash
set -e

# OrionRobots Link Checker Script
echo "🔗 Starting OrionRobots Link Checker..."

SITE_URL="${1:-http://http_serve}"

# Always use /reports as the default output directory, matching the Docker Compose mount
OUTPUT_DIR="/linkchecker_reports"
MODE="${2:-normal}"  # normal, quick, or nightly
REPORT_FILE="$OUTPUT_DIR/link_check_report.html"

# Prepare a temporary config file for this run
BASE_CONFIG="/linkchecker/linkchecker.conf"
TEMP_CONFIG="/tmp/linkchecker_run.conf"
cp "$BASE_CONFIG" "$TEMP_CONFIG"

# Remove or override the output filename in the temp config to avoid conflicts
sed -i '/^filename=/d' "$TEMP_CONFIG"

# Adjust maxrunseconds in the config for quick/normal modes
if [ "$MODE" = "quick" ]; then
    # Set maxrunseconds=120 for quick mode
    sed -i 's/^maxrunseconds=.*/maxrunseconds=120/' "$TEMP_CONFIG" || echo 'maxrunseconds=120' >> "$TEMP_CONFIG"
elif [ "$MODE" = "normal" ]; then
    # Set maxrunseconds=120 for normal mode
    sed -i 's/^maxrunseconds=.*/maxrunseconds=120/' "$TEMP_CONFIG" || echo 'maxrunseconds=120' >> "$TEMP_CONFIG"
else
    # Remove maxrunseconds for nightly mode (unlimited)
    sed -i '/^maxrunseconds=.*/d' "$TEMP_CONFIG"
fi

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



# Use the temp config for this run
CONFIG_FILE="$TEMP_CONFIG"
cd "$OUTPUT_DIR"
LINKCHECKER_CMD="linkchecker --config=$CONFIG_FILE --output=csv --file-output=output.csv"

if [ "$MODE" = "quick" ]; then
    echo "⚡ Running in quick mode (2min max, internal links only)..."
    LINKCHECKER_CMD="$LINKCHECKER_CMD \
        --recursion-level=1 \
        --timeout=5"
elif [ "$MODE" = "nightly" ]; then
    echo "🌙 Running nightly mode (comprehensive, no time limit)..."
    LINKCHECKER_CMD="$LINKCHECKER_CMD \
        --recursion-level=10 \
        --check-extern \
        --timeout=30 \
        --verbose"
else
    echo "🔍 Running normal mode (2min max, limited external checks)..."
    LINKCHECKER_CMD="$LINKCHECKER_CMD \
        --recursion-level=2 \
        --check-extern \
        --timeout=10 \
        --verbose"
fi


echo "🔄 Starting checks..."


# Run linkchecker, outputting CSV to output.csv in $OUTPUT_DIR
# Wrap in subshell to ensure set -e does not exit on nonzero status
( $LINKCHECKER_CMD "$SITE_URL" ) || true  # Don't fail on broken links

echo "🔄 Processing results..."



# Generate HTML report in $OUTPUT_DIR
cd /linkchecker
if [ -f "$OUTPUT_DIR/output.csv" ]; then
    python3 filter_csv.py "$OUTPUT_DIR/output.csv" > "$REPORT_FILE"
else
    echo "⚠️ No output CSV found in $OUTPUT_DIR, cannot generate HTML report."
fi

echo "📊 Link check complete!"
echo "📄 Report generated: $REPORT_FILE"

# Show summary
if [ -f "$OUTPUT_DIR/output.csv" ]; then
    total_lines=$(wc -l < "$OUTPUT_DIR/output.csv")
    if [ "$total_lines" -gt 1 ]; then
        broken_count=$((total_lines - 1))  # Subtract header line
        echo "❌ Found $broken_count broken links"
    else
        echo "✅ No broken links found!"
    fi
else
    echo "⚠️ No output CSV found in $OUTPUT_DIR"
fi
