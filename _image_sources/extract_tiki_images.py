"""Extract the images from tiki"""
import sqlalchemy
import logging

def image_from_server():
    connection = get_server_connection()
    query = join images, images metadata
    images = do query
    for images:
        yield image and metadata structure
    query = join files, files metadata
    files = do query
    for files:
        yield file and metadata structure

def make_template_writer():
    """Make a writer for tempate data"""
    with open("image_metadata.yml") as fd:
        template = fd.read()
    
    def _write(image):
        """Make an output file for the image"""
        output_name = "{{image.name}}.md".format(image)
        with open(output_name, "r") as fd:
            fd.write(template.format(image=image))
    return _write

def main():
    logging.basicConfig(level=logging.INFO)
    write_image_metadata_page = make_template_writer()
    
    for image in images_from_server():
        write_image_metadata_page(image)
        write_image(image)
    