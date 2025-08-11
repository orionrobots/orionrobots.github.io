#!/bin/bash
# Simple validation script for article content without Playwright
# This can be used as a fallback when Playwright is not available

ARTICLE_URL="http://localhost:8080/2025/07/08/08-comparing-anker-power-packs.html"

echo "🔍 Validating article content at: $ARTICLE_URL"

# Check if server is running
if ! curl -s "$ARTICLE_URL" > /dev/null; then
    echo "❌ ERROR: Cannot reach $ARTICLE_URL"
    echo "   Make sure the site is served locally on port 8080"
    echo "   Run: cd _site && python3 -m http.server 8080"
    exit 1
fi

CONTENT=$(curl -s "$ARTICLE_URL")

# Test 1: Title contains post title and "orionrobots"
if echo "$CONTENT" | grep -q '<title>.*Comparing anker power packs.*Orionrobots.*</title>'; then
    echo "✅ Page title contains post title and 'Orionrobots'"
else
    echo "❌ Page title missing required content"
fi

# Test 2: H2 header with page-header class
if echo "$CONTENT" | grep -q '<h2 class="page-header">.*Comparing anker power packs'; then
    echo "✅ Post header found in H2 element"
else
    echo "❌ Post header H2 element not found"
fi

# Test 3: Tags navigation with tag slug links
TAG_COUNT=$(echo "$CONTENT" | grep -c 'href="/tags/[^"]*"')
if [ "$TAG_COUNT" -gt 0 ]; then
    echo "✅ Tags navigation found with $TAG_COUNT tag links"
else
    echo "❌ Tags navigation with slug links not found"
fi

# Test 4: Images in article tag
IMG_COUNT=$(echo "$CONTENT" | grep -A 1000 '<article>' | grep -B 1000 '</article>' | grep -c '<img')
if [ "$IMG_COUNT" -gt 0 ]; then
    echo "✅ Found $IMG_COUNT images inside article tag"
else
    echo "❌ No images found inside article tag"
fi

# Test 5: Date and author in div
if echo "$CONTENT" | grep -A3 'class="date text-secondary"' | grep -q 'author'; then
    echo "✅ Date and author found in div element"
else
    echo "❌ Date and author div not found"
fi

# Test 6: Footer with Discord and YouTube links
DISCORD_FOUND=$(echo "$CONTENT" | grep -c 'discord')
YOUTUBE_FOUND=$(echo "$CONTENT" | grep -c 'youtube')
if [ "$DISCORD_FOUND" -gt 0 ] && [ "$YOUTUBE_FOUND" -gt 0 ]; then
    echo "✅ Footer contains Discord and YouTube links"
else
    echo "❌ Footer missing Discord ($DISCORD_FOUND) or YouTube ($YOUTUBE_FOUND) links"
fi

# Test 7: Main navigation menu
if echo "$CONTENT" | grep -q '<nav class="navbar'; then
    echo "✅ Main navigation menu found"
else
    echo "❌ Main navigation menu not found"
fi

echo ""
echo "🎯 Article content validation complete!"
echo ""
echo "Note: This is a simplified validation. For complete testing, use:"
echo "  npm run test:bdd (requires Playwright installation)"
echo "  docker compose --profile manual run test (uses containerized Playwright)"