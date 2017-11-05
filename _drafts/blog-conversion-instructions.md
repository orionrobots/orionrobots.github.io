# How to convert the blog items

# Requirements

Git clone this repo. Make yourself a branch:

    git checkout -b helena-{date}

You must have the orionrobots website setup. Namely the vagrantfile.
Get vagrant + ssh setup.
Now do:

    vagrant up
    vagrant ssh
    $ cd /vagrant
    $ bundle install
    $ jekyll build
    $ bundle exec jekyll serve -P 4000 -w -H 0.0.0.0 -I

If you are wandering about that last commandline:
    # -P 4000 -> Must match the guest http forwarded port
    # -w -I   -> Watch and incremental
    # -H 0.0.0.0

You should wait for a bit, and then be able to see your site at: http://localhost:4000

# Getting an item to work on

# Images

If there are images in the path, the post will need a gallery directory.

* Search in the project for /galleries. Create a folder there with a shortened name of the post file. {date}-{shortened_name}.
* Keep a copy of that path.
* Save images into that folder

* When you are done with all the paragraphs, and happy with the result, git add the page + it's images and then commit them. Push it onto your branch.

    git add _posts/{my page name}
    git add galleries/{gallery folder}/*
    git commit -m "{a little message about what you added}"
    git push

* When you've done a few, make a merge request to me to review it.

