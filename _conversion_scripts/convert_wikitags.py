#export PYTHONPATH=~/Dropbox/python_libs
import os
import re
import sys
import logging

import logging_setup

def get_wiki_file_list(path):
    file_list = os.listdir(path)
    return [file_name for file_name in file_list if file_name.endswith(".html")]
    
    
def main():
    logging_setup.setup()
    wiki_tags = re.compile('<a class="wiki wiki_page" href="(.*?)" title="(.*?)">\s*(.*?)\s+</a>')
    input_dir, output_dir = sys.argv[1], sys.argv[2]
    
    file_list = get_wiki_file_list(input_dir)
    
    for file_name in file_list:
        logging.info("Processing %s", file_name)
        with open(os.path.join(input_dir, file_name)) as fd:
            data = fd.read()
        new_data, nmade = wiki_tags.subn('{{wikilink("\g<1>", "\g<3>", "\g<2>")}}', data)
        output_filename = os.path.join(output_dir, file_name)
        logging.info("Made %d subs. Writing output to %s", nmade, output_filename)
        with open(output_filename, "w") as out_fd:
            out_fd.write(new_data)

        
if __name__ == "__main__":
    main()