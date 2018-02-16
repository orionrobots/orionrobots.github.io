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
    with open(filename) as csv_file:
        reader = csv.DictReader((row for row in csv_file if not row.startswith('#')), delimiter=';')
        non_200 = (item for item in reader if 'OK' not in item['result'])
        non_redirect = (item for item in reader if '307' not in item['result'])

        total_list = list(non_redirect)
        output_file(total_list)

if __name__ == '__main__':
    main()
