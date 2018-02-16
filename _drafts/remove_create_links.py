import sys
from bs4 import BeautifulSoup


def remove_create_page_links(filename):
    with open(filename, 'rb') as fd:
        _, preamble, raw_page = fd.read().split(b'---')

    bs = BeautifulSoup(raw_page, 'lxml')
    for link in bs('a'):
        if link.string == '?':
            link.decompose()
    body_element = bs('body')[0]
    with open(filename, 'wb') as fd:
        fd.write(b'---')
        fd.write(preamble)
        fd.write(b'---\n')
        for child in body_element.children:
            fd.write(child.encode())


def main():
    remove_create_page_links(sys.argv[1])


if __name__ == '__main__':
    main()
