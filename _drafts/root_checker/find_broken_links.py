from BeautifulSoup import BeautifulSoup
import eventlet
from eventlet.green import urllib2
from pprint import pprint
from urlparse import urljoin

def make_absolute(root_url, urls):
    """For each url, if it isn't relative,
    prefix with the root url"""
    for url in urls:
        yield urljoin(root_url, url)
#        if not url.startswith('http:'):
#            yield '/'.join([root_url, url])
#        else:
#            yield url


def get_urls(body):
    """Get the urls of anchor tags for a given body"""
    soup = BeautifulSoup(body)
    a_tags = soup.findAll('a')
    tag_props = [dict(tag.attrs) for tag in a_tags]
    tag_props = [tag for tag in tag_props if 'href' in tag]
    urls = [tag['href'] for tag in tag_props]
    urls = [url for url in urls if not url.startswith('#')]
    return urls

def slice_n_set(current, n):
    sl = list(current)
    return set(sl[:n]), set(sl[n:])

def make_link_chain(links_seen, url):
    """Given a url and the links seen,
    make a whole link chain list to get there.
    Only follow the initial links"""
    chain = []
    to_process = url
    while to_process in links_seen and to_process not in chain:
        chain.insert(0, to_process)
        to_process = list(links_seen[to_process])[0]
    return chain

def get_broken_list(site_root):
    """Given a site root,
    return a list of tuples: (page_url, [broken links])
    It will spider, but not outside of the site
    """
    links_seen = {site_root:set()}
    visited = set()
    new = {site_root}
    bad_links = {}

    def fetch(url):
        try:
            fd = urllib2.urlopen(url)
            if fd.info().gettype() == 'text/html' and 'orionrobots.co.uk' in fd.geturl():
                body = fd.read()
            else:
                body = ''
        except Exception as e:
            body = e
        return url, body

    def add_to_links_seen(url, parent):
        if url in links_seen:
            links_seen[url].add(parent)
        else:
            links_seen[url] = {parent}

    pool = eventlet.GreenPool()

    try:
        while len(new) > 0:
            current, new = slice_n_set(new, 10)
            for current_url, body in pool.imap(fetch, current):
                visited.add(current_url)
                if isinstance(body, Exception):
                    bad_links['current_url'] = body
                elif current_url.startswith(site_root):
                    urls = list(make_absolute(current_url, get_urls(body)))
                    [add_to_links_seen(url, current_url) for url in urls]
                    [new.add(url) for url in urls if url not in visited]

            print "Bad urls counted is", len(bad_links)
            print "Visited length is", len(visited)
            if len(bad_links) >= 5:
                break
    finally:
        print "Bad link chains so far:"
        pprint([(make_link_chain(links_seen, url), body) for url, body in bad_links])

get_broken_list('http://orionrobots.co.uk')