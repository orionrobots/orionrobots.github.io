TODO:
* Make the simple (but slightly slow and ugly gallery work) - done
* Finish the conversion of the freeform and sig-gen articles - done
* Make those changes live - done
* Link checker stuff - ensure there aren't dead links.
* Add the image descriptions to that yaml for gallery 8.

* Reduce the file count - duplicates
    * "fdupes -r galleries"
    * for file in $(ls -d */); do echo $file $(find $file -type f | wc -l); done
        assets/ 157
        forums/ 96
        fritzing_library/ 2
        galleries/ 437
        js/ 5
        lego-great-ball-contraption-stirrer-basket/ 25
        orionrobots_identity/ 4
        pages/ 5
        _posts/ 212
        products/ 17
        wiki/ 325

* Find links to other gallery 8 images.-done
* Make actual thumbnails server side for the gallery images.
* Finish converting image files
* Ensure all image links in documents work.
* Start removing images from tiki site.
* Find ways to speed up jekyll (reduce files, or generator complexity)