"""Convert blogs from tiki to html for html docs
"""
import string
import datetime
import re
import yaml
import urllib2
from bs4 import BeautifulSoup
import logging
import codecs


def process_tags_file(filename):
  tags_data = yaml.load(open(filename))
  logging.info("Loaded %d tags", len(tags_data))
  tags = {}
  for tag in tags_data:
    post_id = tag['postId']
    tags[post_id] = tags.get(post_id, []) + [tag['raw_tag']]

  return tags


def pull_tiki_tags_macro(content, tags):
  """Given a chunk of content - the body,
  find any {TAGS()}a b c{TAGS} type constructs, and remove them.
  This will mutate the content, and return the list of tags with additional tags appended.
  Warning - this will not remove titles/headers"""
  tags_re = re.compile("\{TAGS\(\)\}(.*)\{TAGS\}")
  text = content.find(text=tags_re)
  if text:
    tags = tags + tags_re.search(text).groups()[0].split()
    text.replace_with(tags_re.sub("", text))
  return tags


def main():
  posts = yaml.load(open("tiki_blog_posts.yml"))
  all_tags = process_tags_file("tiki_objects.yml")
  logging.info("Starting processing posts")
  for post in posts:
    title = post['title']
    logging.info("Processing %s:'%s'", title, post['postId'])
    content = urllib2.urlopen("http://orionrobots.co.uk/blogpost%d" % post['postId']).read()
    logging.info("Downloaded.... Now converting")
    soup = BeautifulSoup(content)
    body = soup.find_all('div', {'class': 'postbody-content'})[0]
    tags = all_tags.get(post['postId'], [])
    tags = pull_tiki_tags_macro(body, tags)
    created = datetime.datetime.strptime(post['FROM_UNIXTIME(created)'], '%Y-%m-%d %H:%M:%S')
    description = post['title']

    output = {
      'title': title,
      'tags': tags,
      'description': description,
      'created': created
    }
    output_doc = u"---\n" + yaml.safe_dump(output) + u"\n---\n" + body.prettify()
    output_file = title.translate(string.maketrans(",.-!?:", "___  _")) + ".html"
    with codecs.open(output_file, "w", "utf-8") as fd:
      fd.write(output_doc)
    logging.info("Written back out.")

if __name__ == "__main__":
  logging.basicConfig(level=logging.INFO)
  main()
