#!/bin/bash
# Helper to create a new blog post, and folder structure, open it in vs code.
# Usage:
#   ./.github/scripts/new_post.sh "Post title not slugged but in quotes"

set -eu -o pipefail

function slug_from_title_and_date {
    echo "$POST_DAY-$1" | tr '[:upper:]' '[:lower:]' | tr -s ' ' '-' | tr -s '[:punct:]' '-'
}

function make_folder_path {
    local slug="$1"
    echo "content/$POST_YEAR/$POST_MONTH/$slug"
}

function file_path {
    local slug="$1"
    local folder_path="$2"
    echo "$folder_path/${slug}.md"
}

function create_post {
    local file_path="$1"
    echo "Creating post at $file_path"
    touch "$file_path"
    (
        echo "---"
        echo "title: $POST_TITLE"
        echo "date: $POST_DATE"
        echo "thumbnail: /content/${POST_YEAR}/${POST_MONTH}/${slug}.jpg"
        echo "---"
    ) >"$file_path"
}

# Bash argument handler
function usage {
    echo "Usage: $0 [--date <date>|defaults to today]  <\"Post title not slugged but in quotes\">"
    echo "Example: $0 \"My New Blog Post\""
    echo "This script creates a new blog post with the given title, slugifies it, and opens it in VS Code."
    echo "Example with date: $0 --date 2023-10-01 \"My New Blog Post\""
    exit 1
}

function extract_date_elements {
    # Extract the year, month, and day from the post date
    POST_YEAR=$(date -d "$POST_DATE" +"%Y")
    POST_MONTH=$(date -d "$POST_DATE" +"%m")
    POST_DAY=$(date -d "$POST_DATE" +"%d")
}

function handle_arguments {
    # Handle an optional argument for the post date (defaults to today)
    if [ "$#" -eq 3 ] && [ "$1" == "--date" ]; then
        POST_DATE="$2"
        shift 2
    else
        POST_DATE=$(date +"%Y-%m-%d")
    fi

    # Handle no arguments, -h or --help
    if [ "$#" -eq 0 ] || [ "$1" == "-h" ] || [ "$1" == "--help" ]; then
        usage
    fi

    extract_date_elements
    POST_TITLE=$1
}

function main {
    local slug="$(slug_from_title_and_date "$POST_TITLE")"
    local folder_path="$(make_folder_path "$slug")"
    local file_path="$(file_path "$slug" "$folder_path")"
    mkdir -p "$folder_path"
    create_post "$file_path"
    code "$file_path"
}

handle_arguments "$@"
main
