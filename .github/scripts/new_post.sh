#!/bin/bash
set -eu -o pipefail

POST_DATE=$(date +"%Y-%m-%d")
POST_YEAR=$(date +"%Y")
POST_MONTH=$(date +"%m")
POST_DAY=$(date +"%d")
POST_TITLE=$1

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
    echo "---" >> "$file_path"
    echo "title: $POST_TITLE" >> "$file_path"
    echo "date: $POST_DATE" >> "$file_path"
    echo "draft: true" >> "$file_path"
    echo "---" >> "$file_path"
}

function main {
    local slug="$(slug_from_title_and_date "$POST_TITLE")"
    local folder_path="$(make_folder_path "$slug")"
    local file_path="$(file_path "$slug" "$folder_path")"
    mkdir -p "$folder_path"
    create_post "$file_path"
}

main


