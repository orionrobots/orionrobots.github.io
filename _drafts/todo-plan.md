
# Journal 2017-12-31

## TODO:

* Link checker stuff - ensure there aren't dead links.
    * NOTE: Use the staged version of orionrobots - as the .htaccess file is active there - this will get dead links (local ones are just a speed thing)
    * Set up the automation for this - then easier to resume work.
        * <https://www.google.co.uk/search?q=link+checker+command+line&oq=link+checker+comma&aqs=chrome.0.0j69i57j0l3j69i64.5221j0j7&sourceid=chrome&ie=UTF-8>
        * <https://wummel.github.io/linkchecker/man1/linkchecker.1.html>
        * Work out where to install it on ODM cloud 1 - or in a docker container for the purpose.
    * Use the "LinkChecker" app on my laptop to check it for dead links.
    * Make changes, and push them across to the staging thing.
    * Run the link checker against that to see if it's improved.
    * Can I partially automate this - could I make a dead link checker that can run in a github job?
* Find (I wrote it down somewhere) the image gallery conversion process.
* Make processes for the other repeating operations.
* Add the image descriptions to that yaml for gallery 8.

* Reduce the file count - duplicates
    * `fdupes -r galleries`
    * `for file in $(ls -d */); do echo $file $(find $file -type f | wc -l); done`
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

* Make actual thumbnails server side for the gallery images.
* Finish converting image files
* Find ways to speed up jekyll (reduce files, or generator complexity)
