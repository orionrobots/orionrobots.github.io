"""add_dates_to_posts

This will add a date to Jekyll posts that don't have one, so they are compatible with Netlify CMS.
Posts will be clobbered in place.

Usage:
    add_dates_to_posts.py <path_to_post>


"""
import yaml
import os
import sys

# def process_file(filepath):
#     with open(filepath, 'r') as f:
#         raw_data = f.read()
#     # split into front matter and content
#     documents = raw_data.split("---\n")
#     if len(documents) != 3:
#         print(f"Skipping {filepath} - not MD with front matter")
#         return

#     front_matter = yaml.safe_load(documents[1])
#     if 'date' in front_matter:
#         print(f"Skipping {filepath} - already has date")
#         return

#     # We need to add a date - extract from filename
#     date_to_add = extract_date_from(filepath)
#     print(f"Adding date to {filepath}")
#     front_matter['date'] = date_to_add
#     documents[1] = yaml.dump(front_matter)
#     with open(filepath, 'w') as f:
#         f.write("---\n".join(documents))

def get_date_from_filename(path_to_post):
    filename = os.path.basename(path_to_post)
    date = filename.split("-")[0:3]
    return "-".join(date);

def read_file_content(path_to_post):
    with open(path_to_post, 'r') as f:
        raw_data = f.read()
    # split into front matter and content
    documents = raw_data.split("---\n", 3)
    if len(documents) != 3:
        print(f"Skipping {path_to_post} - not MD with front matter")
        return

    return documents[2]

def add_date_to_post(path_to_post, front_matter):
    print(f"Would add date to post {path_to_post}")
    date_to_add = get_date_from_filename(path_to_post)
    front_matter['date'] = date_to_add
    print()
    file_content = read_file_content(path_to_post)
    output_file = "---\n" + yaml.dump(front_matter) + "---\n" + file_content
    with open(path_to_post, 'w') as f:
        f.write(output_file)


def load_front_matter(path_to_post):
    with open(path_to_post, 'r') as f:
        raw_data = f.read()
    # split into front matter and content
    documents = raw_data.split("---\n", 3)
    if len(documents) != 3:
        print(f"Skipping {path_to_post} - not MD with front matter")
        return

    front_matter = yaml.safe_load(documents[1])
    return front_matter

def process_post(path_to_post):
    # Load the front matter
    front_matter = load_front_matter(path_to_post)
    if front_matter is None:
        return
    if 'date' in front_matter:
        print(f"Skipping {path_to_post} - already has date")
        return
    else:
        add_date_to_post(path_to_post, front_matter)
        print(f"Added date to {path_to_post}")


def main():
    path_to_post = sys.argv[1]
    process_post(path_to_post)

if __name__ == '__main__':
    main()
