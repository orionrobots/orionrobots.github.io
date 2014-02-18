"""
Hacky conversion from tiki/html/hyde ex pages to Jekyll/liquid.

"""
import re
import sys

from bs4 import BeautifulSoup


def test_soup_main():
    data = """
        ---
        created: 2008-11-28 12:55:00
        description: Some desc stuff
        tags: [what, ever]
        title: Test front matter, please
        ---
        <div class="postbody-content">
             <p>
          Testing [existing Link](http://link "Link text")
          , possibly a little modification and a lot of creative spirit, a chap over at
          <a href="http://www.foundphotography.com/PhotoThoughts/archives/2005/10/medium_format_p.html" >
           Found Photography
          </a>
          actually built a working real Pinhole camera, with film winder and everything, with Lego.
         </p>
         <p>
          Meanwhile, I have been attending (in person) many London events like
          <a href="http://dorkbot.org/dorkbotlondon/" >
           DorkBotLondon
          </a>
          , Lonix and British Computer Society events, only as a punter currently. If you are in London, then I seriously recommend DorkBotLondon. There seems to be a number of people using Midi controlled microcontrollers to get robotic behaviour in digital arts situations- I am not sure I would use such a thing myself, but there have been some very interesting items - including a moving wall.
         </p>
         <p>
          While at Dorkbotlondon I saw this
          <a href="http://drinkbroken.typepad.com/drink_broken/2005/10/weve_been_talki.html" >
           alarm clock
          </a>
          . It is able to wake you up at the right time for your train. Linking up with departure boards and the like, and uses a little Lego for its plunger like silence button. By not waking you up until the crucial moment (train cancellations taken into account), you gain a lot of additional sleep.
         </p>
         <h1>Foo</h1>
         Some stuff<br/>
         This should be on another line.

         <img height="380" src="/image386" width="580"/>
         <img height="380" src="/image386" width="580" alt="some alt text"/>

         <h2>Bar</h2>
         Some other stuff
         <ul>
            <li>
                a
            </li>
            <li>b</li>
         </ul>
     </div>
    """
    def default_output():
        while True:
            print (yield)
    output = default_output()
    soup_main(data, output)



def soup_main(data, output):
    _, front_matter, doc = data.split("---", 3)
    soup = BeautifulSoup(doc)
    soup.body.unwrap()
    soup.html.unwrap()
    #paragrap elements
    paragraphs = soup.find_all("p")
    [paragraph.insert_after("\n") for paragraph in paragraphs]
    [paragraph.unwrap() for paragraph in paragraphs]

    brs = soup.find_all("br")
    [br.replace_with("\n\n") for br in brs]

    headers = soup.find_all("h1")
    [header.insert_before("# ") for header in headers]
    [header.unwrap() for header in headers]
    headers = soup.find_all("h2")
    [header.insert_before("## ") for header in headers]
    [header.unwrap() for header in headers]
    headers = soup.find_all("h3")
    [header.insert_before("### ") for header in headers]
    [header.unwrap() for header in headers]

    ul_lists = soup.find_all("ul")
    for ul in ul_lists:
        li_elements = ul.find_all("li")
        for item in li_elements:
            item.string = item.string.strip("\r\n ")
        [item.insert_before("* ") for item in li_elements]
        [item.unwrap() for item in li_elements]
        ul.unwrap()

    images = soup.find_all("img")
    [img.replace_with("![%s](%s)" % (img.get('alt', ""), img['src'])) for img in images]

    #postbody main
    [div.unwrap() for div in soup.select("div.postbody-content")]



def main():
    with open(sys.argv[1]) as fd:
        data = fd.read()

    unwanted_html_attribute = r'\s*(?:[^=> ]+="[^"]+"\s*)*'
    output = re.sub("\s*</p>\s*<p>\s*", "\n\n", data, flags=re.MULTILINE)
    output = re.sub("\s*</p>\s*", "\n\n", output, flags=re.MULTILINE)
    output = re.sub("\s*<p>\s*", "\n\n", output, flags=re.MULTILINE)
    output = re.sub("\s*<br(?: */)?>\s*", "\n\n", output, flags=re.MULTILINE)
    #postbody div
    output = re.sub('<div class="postbody-content">', '', output)
    #anchors
    output = re.sub(r'<a' + unwanted_html_attribute + 'href="([^"]+?)"' + unwanted_html_attribute +
                   '>\s*([^<]*?)\s*</a>',
                   r'[\g<2>](\g<1>)', output,
                   flags=re.MULTILINE)
    output = re.sub(r'<h1' + unwanted_html_attribute + '>\s*([^<]*?)\s*</h1>\s*', '# \g<1>\n\n', output, flags=re.MULTILINE)
    output = re.sub(r'<h2' + unwanted_html_attribute + '>\s*([^<]*?)\s*</h2>\s*', '## \g<1>\n\n', output, flags=re.MULTILINE)
    #alt="Image"
    output = re.sub(r'alt="Image"\s*', '', output, flags=re.MULTILINE)
    #images with alt text
    alt_re = """<img\s*                                     # Starting image tag
            """ + unwanted_html_attribute + """             # Filter the unwanted
                 (?:                                        # Group - non capture
                    alt="(?P<alt>[^"]*)"                    # Capture the alt
                    """ + unwanted_html_attribute + """     # Filter the unwanted
                    src="(?P<src>[^"]*)"|                   # Capture the src
                    src="(?P<src>[^"]*)"                    # Capture the src
                    """ + unwanted_html_attribute + """     # Filter the unwanted
                    alt="(?P<alt>[^"]*)"                    # Capture the alt
                )                                           # End non-capture
                """ + unwanted_html_attribute + """         # Filter the unwanted
                /?>                                         # End of the image tag
                """

    # m = re.match(alt_re, 'alt="foo" src="bar" blah="1" doh="2"', flags=re.VERBOSE)
    output = re.sub(r'<img' + unwanted_html_attribute + 'alt="(?P<alt>[^"]*)"' + unwanted_html_attribute +
                    'src="(?P<src>[^"]*)"' + unwanted_html_attribute + '/?>',
                    '![\g<alt>](\g<src>)', output, flags=re.MULTILINE)
    #images
    output = re.sub(r'<img' + unwanted_html_attribute + '\s*src="([^"]*)"' + unwanted_html_attribute + '/?>',
                    '![](\g<1>)', output, flags=re.MULTILINE)

    with open(sys.argv[2], "w") as fd:
        fd.write(output)


if __name__ == "__main__":
    main()


