# From https://github.com/oturpe/jekyll-thumbnail-generator - 2020-06-06
require 'rmagick'
include Magick

module Jekyll
  class GenerateThumbnails < Generator
    safe true
    priority :low

    # Fixed values
    Asset_base = "assets"
    Thumbnails_dir = "thumbnails"
    Default_cover = "cover.jpg"

    # Default configuration values
    Thumbnail_gallery = { 'width' => 200, 'height' => 120 }
    Thumbnail_cover = { 'width' => 400, 'height' => 240 }

    attr_accessor :thumbnail_gallery, :thumbnail_cover

    def generate(site)
        get_parameters! site

        # Strangly, site.collections contains lists of length 2 where item 0 is
        # the collection name and item 1 is the collection itself. Unwrapping.
        collections = site.collections.map { |c| c[1] }
        collections.each do |collection|
            collection_asset_base = "#{Asset_base}/#{collection.label}"
            collection.docs.each do |doc|
                asset_dir = doc.data["asset_dir"] || "#{collection_asset_base}/#{doc.data['slug']}";
                puts(asset_dir) if doc.data['asset_dir']
                if File.exists? asset_dir
                    asset_thumbnails_dir = "#{asset_dir}/#{Thumbnails_dir}"
                    puts("thumbnails dir is #{asset_thumbnails_dir}") if doc.data['asset_dir']
                    begin
                        Dir.mkdir(asset_thumbnails_dir) unless File.exists?(asset_thumbnails_dir)
                    rescue SystemCallError
                        puts("Could not create thumbnails dir: #{asset_thumbnails_dir}")
                        puts("Asset dir content:")
                        system("ls -l #{asset_dir}")
                        puts("Asset dir permissions:")
                        system("ls -ld #{asset_dir}")
                        print("I am:")
                        system("whoami")
                    end

                    new_files = []
                    new_files.concat generate_gallery_thumbnails(site, doc, asset_dir)
                    new_files.concat generate_cover_thumbnail(site, doc, asset_dir)

                    reader = StaticFileReader.new(site, asset_thumbnails_dir)
                    site.static_files.concat(reader.read(new_files))
                end
            end
        end
    end

    def get_parameters!(site)
        @thumbnail_gallery = site.config['thumbnail_gallery'] || Thumbnail_gallery
        @thumbnail_cover = site.config['thumbnail_cover'] || Thumbnail_cover
    end

    def generate_gallery_thumbnails(site, doc, asset_dir)
        gallery = doc.data['gallery']
        return [] if not gallery

        new_thumbnails = gallery.map do |item|
            image_file = "#{asset_dir}/#{item['file']}"
            image = Image.read(image_file)[0]
            thumbnail_file = "#{asset_dir}/#{Thumbnails_dir}/#{item['file']}"

            next nil if not thumbnail_needed?(image_file, thumbnail_file, @thumbnail_gallery)

            preexisting = File.exists? thumbnail_file
            save_thumbnail image, thumbnail_file, @thumbnail_gallery

            next nil if preexisting
            item['file']
        end

        return new_thumbnails == nil ? [] : new_thumbnails.compact
    end

    def generate_cover_thumbnail(site, doc, asset_dir)
        cover = doc.data['cover'] || Default_cover
        cover_file = "#{asset_dir}/#{cover}"
        return [] if ! File.exists? cover_file

        image = Image.read(cover_file)[0]
        thumbnail_file = "#{asset_dir}/#{Thumbnails_dir}/#{cover}"

        return [] if not thumbnail_needed?(cover_file, thumbnail_file, @thumbnail_cover)

        preexisting = File.exists? thumbnail_file
        save_thumbnail image, thumbnail_file, @thumbnail_cover

        return [] if preexisting
        
        [cover]
        
    end

    def save_thumbnail(image, file, size)
        image.resize_to_fit! size['width'], size['height']
        image.write file
    end

    def thumbnail_needed?(image_file, thumbnail_file, size)
        # No thumbnail yet?
        return true if not File.exists? thumbnail_file
        # Image has changed?
        return true if File.mtime(thumbnail_file) < File.mtime(image_file)

        # Need to resize?
        metadata = (Image.ping thumbnail_file)[0]
        existing_size = {
            'width' => metadata.columns,
            'height' => metadata.rows
        }

        return false if (
            size['width'] == existing_size['width'] and
            size['height'] >= existing_size['height']
        )
        return false if
            size['height'] == existing_size['height'] and
            size['width'] >= existing_size['width']

        true
    end
  end
end