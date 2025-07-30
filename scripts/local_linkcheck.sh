#!/bin/bash

# OrionRobots Local Link Checker
# This script runs the link checker locally using Docker Compose

set -e

echo "🔗 OrionRobots Link Checker - Local Mode"
echo "========================================"

# Check if docker compose is available
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed or not in PATH"
    exit 1
fi

if ! docker compose version &> /dev/null; then
    echo "❌ Docker Compose is not available"
    exit 1
fi

echo "📦 Building site..."
docker compose up dist --build

echo "🏗️ Building static site..."
docker compose up build --build

echo "🚀 Starting HTTP server..."
docker compose up -d http_serve

echo "⏳ Waiting for server to be ready..."
sleep 10

echo "🔍 Running link checker..."
docker compose up broken_links --build

echo "📊 Link check complete!"
echo ""
echo "📄 Reports are available in the ./link_reports/ directory"
echo "🌐 View the report by opening ./link_reports/link_check_report.html in your browser"
echo ""
echo "🛑 Stopping services..."
docker compose down

echo "✅ Done!"