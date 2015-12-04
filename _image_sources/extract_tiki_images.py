"""Extract the images from tiki"""
import json
import logging
import sys

from sqlalchemy import create_engine, Table, MetaData, inspect
from sqlalchemy.sql import select

def get_server_connection(config):
    eng = create_engine(
        "mysql://{user}:{pass}@{server}/{db}"\
        .format(**config))
    return eng


def images_from_server(config):
    logging.info("Connecting")
    eng = get_server_connection(config) 
    with eng.connect() as con:
        logging.info("COnnection made. Getting metadata")
        meta = MetaData()
        logging.info("Reflecting")
        meta.reflect(bind=eng)
        images = Table('tiki_images', meta, autoload=True)
        galleries = Table('tiki_galleries', meta, autoload=True)
        images_data = Table('tiki_images_data', meta, autoload=True)
        joined = images.join(galleries, 
                        images.c.galleryId == galleries.c.galleryId).join(images_data,
                        images.c.imageId == images_data.c.imageId)
        query = select([images.c.name, 
                        images.c.imageId, 
                        images.c.description,
                        galleries.c.galleryId, 
                        galleries.c.name.label("galleryName"),
                        galleries.c.description.label("galleryDescription"),
                        images_data.c.filename,
                        imagec_data.c.xsize,
                        images_data.c.ysize,
                        images_data.c.data]).select_from(joined)
        rs = con.execute(query)
    
        while True:
            image = rs.fetchone()
            if not image:
                break
            yield image
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
        
        output_name = "{image.imageId}_{image.name}".format(image=image)
        output_name = output_name.replace(output_name.rsplit('.', 1)[1], '.md')
        with open(output_name, "w") as fd:
            fd.write(template.format(image=image))
    return _write


def write_image(image):
    output_name = "{image.imageId}_{image.name}".format(image=image)
    with open(output_name, 'wb') as fd:
        fd.write(image['data'])

def get_config():
    """Expect config as json on stdin"""
    return json.load(sys.stdin)


def main():
    logging.basicConfig(level=logging.INFO)
    config = get_config()
    logging.info("Got config %s", repr(config))
    
#    write_image_metadata_page = make_template_writer()
    # test_db(config)
    
    for image in images_from_server(config):
        print image['name'], image['xsize'], image['ysize']
#        write_image_metadata_page(image)
#        write_image(image)
        
if __name__ == "__main__":
    main()