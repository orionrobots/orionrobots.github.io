import csv
import sys

from jinja2 import Environment, FileSystemLoader, select_autoescape


def read_file(filename):
    with open(filename) as csv_file:
        reader = csv.DictReader(csv_file, delimeter=';')
        return reader


def output_file(items):
    env = Environment(
        loader=FileSystemLoader('.'),
        autoescape=select_autoescape(['html', 'xml'])
    )
    template = env.get_template('output_template.html')
    print template.render(items=items)

def main():
    reader = read_file(sys.argv[1])
    non_200 = (item for item in reader if 'OK' not in item['result'])

    output_file(non_200)

if __name__ == '__main__':
    main()
