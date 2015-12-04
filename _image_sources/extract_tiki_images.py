"""Extract the images from tiki"""
import json
import logging
import sys

from sqlalchemy import create_engine, Table, MetaData
from sqlalchemy.sql import select

def get_server_connection(config):
    eng = create_engine(
        "mysql://{config.user}:{config.pass}@{config.server}/{config.db}"\
        .format(config=config))
    return eng.connect()


def test_db(config):
    with get_server_connection(config) as conn:
        meta = MetaData()
        meta.reflect(bind=eng)
        
        for table in meta.tables:
            print table

def image_from_server(config):
    connection = get_server_connection(config)
    """
    query = join images, images metadata
    images = do query
    for images:
        yield image and metadata structure
    query = join files, files metadata
    files = do query
    for files:
        yield file and metadata structure
    """
    

def make_template_writer():
    """Make a writer for tempate data"""
    with open("image_metadata.yml") as fd:
        template = fd.read()
    
    def _write(image):
        """Make an output file for the image"""
        output_name = "{{image.name}}.md".format(image)
        with open(output_name, "w") as fd:
            fd.write(template.format(image=image))
    return _write


def write_image(image):
    with open(image['filename'], 'wb') as fd:
        fd.write(image['data'])

def get_config():
    """Expect config as json on stdin"""
    return json.load(sys.stdin)


def main():
    logging.basicConfig(level=logging.INFO)
    config = get_config()
    logging.info("Got config %s", repr(config))
    
#    write_image_metadata_page = make_template_writer()
    test_db(config)
    
#    for image in images_from_server(config):
#        write_image_metadata_page(image)
#        write_image(image)
        
if __name__ == "__main__":
    main()