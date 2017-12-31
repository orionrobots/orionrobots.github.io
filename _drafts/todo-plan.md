TODO:
* Make the simple (but slightly slow and ugly gallery work) - done
* Finish the conversion of the freeform and sig-gen articles - done
* Make those changes live - done
* Link checker stuff - ensure there aren't dead links.
    * Use the staged version of orionrobots - as the .htaccess file is active there - this will get dead links (local ones are just a speed thing). This is on odm cloud1.
    * Use the "LinkChecker" app on my laptop to check it for dead links.
    * Make changes, and push them across to the staging thing.
    * Run the link checker against that to see if it's improved.
    * Can I partially automate this - could I make a dead link checker that can run in a jenkins job?
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