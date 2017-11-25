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
  images_thumb_data = images_data.alias()

def process_image(image_row):
	image_filename = slugify('{i}-{fn}'.format(i=image_row[Tables.images.c.imageId], fn=image_row[Tables.images_data.c.filename])).lower()
    thumb_filename = slugify('thm-{i}-{fn}'.format(i=image_row[Tables.images.c.imageId], fn=image_row[Tables.images_thumb_data.c.filename])).lower()
    image_data = {
    	'name': image_row.name,
        'src': image_filename,
        'thumb-src': thumb_filename,
        'date': datetime.datetime.fromtimestamp(image_row.created),
        'caption': image_row.description
    }
    with open(os.path.join('extract_images', image_filename), 'wb') as fd:
    	fd.write(image_row[Tables.images_data.c.data])
    with open(os.path.join('extract_images', thumb_filename), 'wb') as fd:
    	fd.write(image_row[Tables.images_thumb_data.c.data])
    
    return image_data

def main():
  conn,engine = connect()

  s = select([Tables.images, Tables.images_data, Tables.images_thumb_data])
  s = s.where(and_(Tables.images.c.galleryId==8, Tables.images.c.imageId == Tables.images_data.c.imageId, Tables.images_data.c.type=='o', 
  			 Tables.images.c.imageId == Tables.images_thumb_data.c.imageId, Tables.images_thumb_data.c.type=='t'))
  
  images = conn.execute(s)
  images_data = [process_image(image) for image in images]
  print yaml.dump(images_data)
  
if __name__ == '__main__':
    main()