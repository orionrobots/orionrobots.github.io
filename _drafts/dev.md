Docker build
------------
    
    Build:

    docker run --rm -v $(pwd):/srv/jekyll -it -p 4000:4000 jekyll/builder:3 bash
    jekyll serve

On windows cmd:
    docker run --rm -v %pwd%:/srv/jekyll -it -p 4000:4000 jekyll/builder:3 bash
