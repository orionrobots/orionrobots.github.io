# -*- coding: utf-8 -*-
import csv
import sys
import os
from urllib.parse import urlparse

from jinja2 import Environment, FileSystemLoader, select_autoescape


def is_image_url(url):
    """Check if URL points to an image file"""
    image_extensions = {'.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.ico', '.bmp'}
    parsed = urlparse(url)
    path = parsed.path.lower()
    return any(path.endswith(ext) for ext in image_extensions)


def categorize_link(item):
    """Categorize link by type"""
    url = item['url']
    if is_image_url(url):
        return 'image'
    elif url.startswith('mailto:'):
        return 'email'
    elif url.startswith('http'):
        return 'external'
    else:
        return 'internal'


def output_file(items):
    env = Environment(
        loader=FileSystemLoader('.'),
        autoescape=select_autoescape(['html', 'xml'])
    )
    template = env.get_template('output_template.html')
    
    # Categorize items
    categorized = {}
    for item in items:
        category = categorize_link(item)
        if category not in categorized:
            categorized[category] = []
        categorized[category].append(item)
    
    print(template.render(
        categorized=categorized, 
        total_count=len(items),
        image_count=len(categorized.get('image', [])),
        internal_count=len(categorized.get('internal', [])),
        external_count=len(categorized.get('external', [])),
        email_count=len(categorized.get('email', []))
    ))


def main():
    filename = sys.argv[1] if len(sys.argv) > 1 else '/linkchecker/output.csv'
    
    if not os.path.exists(filename):
        print(f"Error: CSV file {filename} not found")
        sys.exit(1)
        
    with open(filename, encoding='utf-8') as csv_file:
        data = csv_file.readlines()
    reader = csv.DictReader((row for row in data if not row.startswith('#')), delimiter=';')
    
    # Filter out successful links and redirects
    non_200 = (item for item in reader if 'OK' not in item['result'])
    non_redirect = (item for item in non_200 if '307' not in item['result'] and '301' not in item['result'] and '302' not in item['result'])
    non_ssl = (item for item in non_redirect if 'ssl' not in item['result'].lower())

    total_list = sorted(list(non_ssl), key=lambda item: (categorize_link(item), item['parentname']))
    
    output_file(total_list)


if __name__ == '__main__':
    main()
