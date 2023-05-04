## Docker build

Build:

```bash
    docker run --rm -v $(pwd):/srv/jekyll -it -p 4000:4000 jekyll/builder:3 bash
    jekyll serve
```

On windows cmd:

```bash
    docker run --rm -v %pwd%:/srv/jekyll -it -p 4000:4000 jekyll/builder:3 bash
```
