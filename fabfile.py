"""Deploy script to make a tarball and stuff onto orionrobots site"""
from fabric.api import local, run, cd, roles
from fabric.api import env
from fabric.operations import put

env.roledefs['webservers'] = ['orionrob@orionrobots.co.uk']

def build():
    local("jekyll build")

@roles("webservers")
def copy_tarball():
    local("tar -cvzf site.tgz _site")
    # upload
    put("site.tgz", "site.tgz")
    
@roles("webservers")
def prepare_dir():
    run("rm -rf new_public_html")
    run("mkdir new_public_html")
    with cd("new_public_html"):
        run("tar -xvzf ../tiki_html.tgz --strip-components=1")
        run("tar -xvzf ../site.tgz --strip-components=1")
        
@roles("webservers")
def pivot_html():
    run("rm -rf old_public_html")
    run("cp -r public_html/logs new_public_html/")
    run("mkdir new_public_html/templates_c")
    run("mv new_public_html/htaccess new_public_html/.htaccess")
    run("mv public_html old_public_html && mv new_public_html ~/public_html")

