"""Why does this file exist"""
from bs4 import BeautifulSoup as bs
import os
import urllib2
import sys


def process(url, output_dir):
    data = urllib2.urlopen(url).read()
    soup = bs(data)


def main():
    url = sys.args[1]
    output_dir = sys.args[2]

    os.makedirs(output_dir)
    process(url, output_dir)

if __name__ == "__main__":
    main()