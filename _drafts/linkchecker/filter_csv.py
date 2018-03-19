# -*- coding: utf-8 -*-
import csv
import sys

from jinja2 import Environment, FileSystemLoader, select_autoescape


def output_file(items):
    env = Environment(
        loader=FileSystemLoader('.'),
        autoescape=select_autoescape(['html', 'xml'])
    )
    template = env.get_template('output_template.html')
    print(template.render(items=items, count=len(items)).encode('utf-8'))

def main():
    filename = sys.argv[1]
    with open(filename, encoding='utf-8') as csv_file:
        data = csv_file.readlines()
    reader = csv.DictReader((row for row in data if not row.startswith('#')), delimiter=';')
    non_200 = (item for item in reader if 'OK' not in item['result'])
    non_redirect = (item for item in non_200 if '307' not in item['result'])
    non_ssl = (item for item in non_redirect if 'ssl' not in item['result'])

    total_list = sorted(list(non_ssl), key=lambda item: item['parentname'])
    
    output_file(total_list)

if __name__ == '__main__':
    main()
