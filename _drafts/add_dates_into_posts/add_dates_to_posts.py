"""add_dates_to_posts

This will add a date to Jekyll posts that don't have one, so they are compatible with Netlify CMS.
Posts will be clobbered in place.

Usage:
    add_dates_to_posts.py <path_to_posts>


"""
import yaml
import os
import sys

def extract_date_from(filepath):
    filename = os.path.basename(filepath)
    date = filename.split("-")[0:3]
    return "-".join(date)  + 'T12:00:00.000Z'

def process_file(filepath):
    with open(filepath, 'r') as f:
        raw_data = f.read()
    # split into front matter and content
    documents = raw_data.split("---\n")
    if len(documents) != 3:
        print(f"Skipping {filepath} - not MD with front matter")
        return
    
    front_matter = yaml.safe_load(documents[1])
    if 'date' in front_matter:
        print(f"Skipping {filepath} - already has date")
        return
    
    # We need to add a date - extract from filename
    date_to_add = extract_date_from(filepath)
    print(f"Adding date to {filepath}")
    front_matter['date'] = date_to_add
    documents[1] = yaml.dump(front_matter)
    with open(filepath, 'w') as f:
        f.write("---\n".join(documents))


def process_posts(path_to_posts):
    for root, dirs, files in os.walk(path_to_posts):
        for file in files:
            if file.endswith(".md"):
                process_file(os.path.join(root, file))


def main():
    # path_to_posts = sys.argv[1]
    # process_posts(path_to_posts)
    filename = "_posts/2004-11-05-simple-parallel-port-led.md"
    process_file(filename)

if __name__ == '__main__':
    main()
