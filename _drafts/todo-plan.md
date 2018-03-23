
# Idea 2018-03-14

Using travis for the deploy pipeline with thecode on github?

https://www.annashipman.co.uk/jfdi/shared-hosting-travis-deploy.html




Install travis locally (gem install travis), and, using the command line tool, encrypt any variables that you will use for deploy. For example, if you use FTP, you will want to encrypt at least the password.

    travis encrypt SOMEVAR="secretvalue" --add

The --add flag in this command adds the required lines to your Travis file.

Create a dedicated SSH key (no passphrase) for deploying. This makes it easy to to identify and revoke if necessary.

    ssh-keygen -t rsa -b 4096 -C 'build@travis-ci.org' -f ./deploy_rsa



Log in to command line Travis (travis login) and get Travis to encrypt the private key file. It prints a helpful output reminding you to only commit the .enc version NOT the deploy_rsa itself.

    language: ruby
    rvm:
    - 2.3.3
    script: scripts/build.sh
    branches:
    only:
    - master
    env:
    global:
    - secure: qvSoY270qAXOtmWdRio9vvhLEf5HHdyzMS39yS4yZw74[snip for length]
    - secure: Hr7FV7lHFEblYfn7EYM/4qV3qV8zdHLebXzNyRvP8L/U[snip for length]
    before_install:
    - openssl aes-256-cbc -K $encrypted_ed2cb1b127e1_key -iv $encrypted_ed2cb1b127e1_iv
    -in deploy_rsa.enc -out /tmp/deploy_rsa -d
    - chmod 600 /tmp/deploy_rsa
    - eval "$(ssh-agent -s)"
    - ssh-add /tmp/deploy_rsa
    deploy:
    provider: script
    script: scripts/deploy.sh
    skip_cleanup: true
    on:
        branch: master


# Journal 2017-12-31

Just tidying up for now.
Previous done items (not today):
* Make the simple (but slightly slow and ugly gallery work) - done
* Finish the conversion of the freeform and sig-gen articles - done
* Make those changes live - done
* Find links to other gallery 8 images.-done

# TODO:

* Link checker stuff - ensure there aren't dead links.
    * NOTE: Use the staged version of orionrobots - as the .htaccess file is active there - this will get dead links (local ones are just a speed thing). This is on odm cloud1. 
    * Set up the automation for this - then easier to resume work.
        * https://www.google.co.uk/search?q=link+checker+command+line&oq=link+checker+comma&aqs=chrome.0.0j69i57j0l3j69i64.5221j0j7&sourceid=chrome&ie=UTF-8
        * https://wummel.github.io/linkchecker/man1/linkchecker.1.html
        * Work out where to install it on ODM cloud 1 - or in a docker container for the purpose.
        
    * Use the "LinkChecker" app on my laptop to check it for dead links.
    * Make changes, and push them across to the staging thing.
    * Run the link checker against that to see if it's improved.
    * Can I partially automate this - could I make a dead link checker that can run in a jenkins job?
* Find (I wrote it down somewhere) the image gallery conversion process.
* Make processes for the other repeating operations.
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

* Make actual thumbnails server side for the gallery images.
* Finish converting image files
* Ensure all image links in documents work.
* Start removing images from tiki site.
* Find ways to speed up jekyll (reduce files, or generator complexity)

----

Swapping out smilies:

Using Glyphicon:

<span class="glyphicons glyphicons-question-sign"> </span>

Using Emoji

razz - &#128539;
cool - &#128526;

icon_mrgreen - 