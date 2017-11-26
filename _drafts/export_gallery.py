from sqlalchemy import create_engine
from sqlalchemy import Table, MetaData, select
from sqlalchemy.sql import and_, or_, not_
import datetime
import json
import yaml
import os
from slugify import slugify


def connect():
    with open("tiki_db_location.json") as fd:
        db_config = json.load(fd)
    engine = create_engine(str("mysql://{u}:{p}@{h}/{d}".format(
        u=db_config['user'],
        p=db_config['pass'],
        h=db_config['host'],
        d=db_config['db'])), encoding=str(db_config['client_charset']))
    conn = engine.connect()
    return conn, engine


class Tables:
    conn,engine = connect()

    meta = MetaData()
    images = Table('tiki_images', meta, autoload=True, autoload_with=engine)
    images_data = Table('tiki_images_data', meta, autoload=True, autoload_with=engine)
    galleries = Table('tiki_galleries', meta, autoload=True, autoload_with=engine)


def make_image_filename(filename):
    root, extension = os.path.splitext(filename)
    return slugify(root).lower() + extension

def get_thumbnail(image_id):
    s = select([Tables.images_data]).where(
        and_(Tables.images_data.c.type=='t', Tables.images_data.c.imageId == image_id))
    thumbs = Tables.conn.execute(s)
    return thumbs.fetchone()

def process_image(image_row):
    image_filename = make_image_filename('{i}-{fn}'.format(i=image_row[Tables.images.c.imageId], 
        fn=image_row[Tables.images_data.c.filename]))
    thumb = get_thumbnail(image_row[Tables.images.c.imageId])
    if thumb:
        thumb_filename = make_image_filename('thm-{i}-{fn}'.format(i=image_row[Tables.images.c.imageId], 
            fn=thumb[Tables.images_data.c.filename]))
    else:
        thumb_filename = None
    image_data = {
        'name': image_row.name,
        'src': image_filename,
        'thumb-src': thumb_filename,
        'date': datetime.datetime.fromtimestamp(image_row.created),
        'caption': image_row.description
    }
    with open(os.path.join('extract_images', image_filename), 'wb') as fd:
        fd.write(image_row[Tables.images_data.c.data])
    if thumb:
        with open(os.path.join('extract_images', thumb_filename), 'wb') as fd:
            fd.write(thumb[Tables.images_data.c.data])
    
    return image_data

def main():
    print "Connecting to DB"
    conn = Tables.conn

    s = select([Tables.images, Tables.images_data])
    s = s.where(and_(
        Tables.images.c.galleryId==os.getenv('GALLERY_ID'), 
        Tables.images.c.imageId == Tables.images_data.c.imageId, 
        Tables.images_data.c.type=='o'))
    
    images = conn.execute(s)
    images_data = [process_image(image) for image in images]
    gallery_q = select([Tables.galleries]).where(Tables.galleries.c.galleryId == os.getenv('GALLERY_ID'))
    galleries = conn.execute(gallery_q)
    gallery = galleries.first()
    output = {
        'images': images_data,
        'name': gallery.name,
        'description': gallery.description,
        'layout': 'autogallery'
    }
    print "Outputting data."
    with open(os.path.join('extract_images', 'index.md'), 'w') as fd:
        yaml.dump(output, fd)
    print "Done."

if __name__ == '__main__':
    main()