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

Items to convert are on the orionrobots old website -hidden by tiki.

http://orionrobots.co.uk/tiki-view_blog.php?blogId=1 - you will need to login - I'll give you the details by hand.

* Find the oldest item.
* Check it's title - it may _already_ be on the new site - in which case, delete it.
* In the _posts directory of the site, create a new file {date}-{name}.md
    * The date should be {yyyy-mm-dd} - year as 4 digits, month as 2 (0 padded) and day (also 0 padded). (0 padded means 0 in front to make up the 2 digits).
    * The name should be in lowercase, and using only dashes (-) as separators. numbers are permitted, but no other non-letter characters.

# Creating the front matter

* Copy this to the top of your new document - and swap the items to correct values:

    ---
    created: 2006-02-24 10:00:00
    description: RCX Switches can be used as analogue actuators
    tags: [robot, biology, nanotech, biotech, mould, beam, hexapod]
    title: RCX Switches can be used as analogue actuators
    layout: post
    ---

* Created date - same as the blog post date - time for now can be 10:00:00.  Format is also {yyyy-mm-dd}.
* Description and title - Just use the post blog title for now. All characters and punctuation can be used here.
* Tags - the blog post probably already has these. Copy them, but comma separated and in lower case
* the dashes are important - keep them.

# Images

If there are images in the path, the post will need a gallery directory.

* Search in the project for /galleries. Create a folder there with a shortened name of the post file. {date}-{shortened_name}.
* Keep a copy of that post.

# Converting the post body

* Work paragraph by paragraph.
* Copy the first paragraph
* As you paste it - beware of the little question marks next to terms. It means that they may be converted to a wiki link. 
    * There is a "wiki" path in the project. If the term is not there, remove the question mark.
    * Otherwise, put square brackets around the term like this [term].
    * And then place parenthesis after the square brackets. Like this [term](/wiki/term.html).
* If there is an image:
    * If the image source is orionrobots, save it in the image directory and use the location there.
    * In the document add:

        <img src="{image_path}">
    
    * If the image has a caption - just place this under the image, inside centre tags:

    <img src="{image_path}">

    <center>Caption for image</center>

* When you find a link:
    * Make sure the link works. IN the document use this format:

        [link text](link address)

    * If it doesn't work - remove it. If it's an inline link - replace with "used to be", if it's in a links list, remove the list item.
* Check your work regularly.
* Save after each paragraph - then move to the next.
* When you are done with all the paragraphs, and happy with the result, git add the page + it's images and then commit them. Push it onto your branch.

    git add _posts/{my page name}
    git add galleries/{gallery folder}/*
    git commit -m "{a little message about what you added}"
    git push

* When you've done a few, make a merge request to me to review it.

