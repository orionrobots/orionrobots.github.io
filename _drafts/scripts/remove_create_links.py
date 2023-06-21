import sys
from bs4 import BeautifulSoup
import os
import logging


def remove_create_page_links(filename):
    sep = '---\n'
    with open(filename, 'r') as fd:
        _, preamble, raw_page = fd.read().split(sep)
    if '>?<' not in raw_page:
        return
    bs = BeautifulSoup(raw_page, 'lxml')
    for link in bs('a'):
        if link.string == '?':
            link.decompose()
    body_element = bs('body')[0]

    with open(filename, 'w') as fd:
        fd.write(sep)
        fd.write(preamble)
        fd.write(sep)
        for child in body_element.children:
            fd.write(str(child))


def main():
    files = os.listdir(sys.argv[1])
    for item in files:
        try:
            remove_create_page_links(os.path.join(sys.argv[1], item))
        except:
            logging.exception("Trouble parsing %s", item)


if __name__ == '__main__':
    main()
