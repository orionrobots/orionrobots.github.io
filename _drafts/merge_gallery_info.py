import yaml
import sys

def load_files(original_filename, merge_data_filename):
    with open(original_filename) as fd:
        main_data = yaml.load(fd)
    with open(merge_data_filename) as fd:
        merge_data = yaml.load(fd)
    return main_data, merge_data


def get_img_id_from_filename(filename):
    """Filename example: 265-step1-ready-to-solder.jpg"""
    parts = filename.split('-')
    return int(parts[0])

def test_get_id_from_filename():
    assert(get_img_id_from_filename('265-step1-ready-to-solder.jpg') == 265)
    assert(get_img_id_from_filename('259-p1010001.jpg') == 259)

def find_img_in_merge_data(merge_data, image_id):
    items = (item for item in merge_data if get_img_id_from_filename(item['src']) == image_id)
    return items.next()

def test_find_img_in_merge_data():
    sample_data = [
        {'caption': '', 'date': '2005-05-30 15:47:52', 'name': 'P1010133.jpg', 'src': '270-p1010133.jpg',
            'thumb-src': 'thm-270-80x63-p1010133.jpg'},
        {'caption': '', 'date': '2005-05-30 15:48:22', 'name': 'P1010135.jpg', 'src': '272-p1010135.jpg',
            'thumb-src': 'thm-272-80x70-p1010135.jpg'},
        {'caption': '', 'date': '2005-05-30 15:48:44', 'name': 'P1010136.jpg', 'src': '273-p1010136.jpg',
            'thumb-src': 'thm-273-80x62-p1010136.jpg'}
    ]
    result = find_img_in_merge_data(sample_data, 272)
    assert(result=={'caption': '', 'date': '2005-05-30 15:48:22', 'name': 'P1010135.jpg', 'src': '272-p1010135.jpg',
            'thumb-src': 'thm-272-80x70-p1010135.jpg'})
    
def process_together(main_data, merge_data):
    new_data = []
    for item in main_data:
        image_id = get_img_id_from_filename(item['src'])
        try:
            merge_item = find_img_in_merge_data(merge_data, image_id)
            new_item = {
                'src': item['src'],
                'thumb-src': item.get('thumb-src', merge_item['thumb-src']),
                'name': item.get('name', merge_item['name']),
                'caption': item.get('caption', merge_item['caption']),
                'date': item.get('date', merge_item['date']),
            }
        except StopIteration:
            print "Image {s} with id {i} not found".format(s=item['src'], i=image_id)
            raise
        new_data.append(new_item)
    return new_data


def main():
    print sys.argv
    main_data, merge_data = load_files(sys.argv[1], sys.argv[2])
    main_data = main_data['images']
    new_data = process_together(main_data, merge_data)
    print yaml.dump(new_data, default_flow_style=False)


if __name__ == '__main__':
    main()

