# -*- mode: ruby -*-
# vi: set ft=ruby :
Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"

  config.vm.network "forwarded_port", guest: 4000, host: 4000

  config.vm.provision "shell", inline: <<-SHELL
    apt-get update
    apt-get install -y ruby ruby-dev make gcc nodejs zlib1g-dev
    apt-get install -y rubygems nodejs python3 python3-pip
    sudo gem install bundler --no-rdoc --no-ri
    sudo pip3 install pyaml
    sudo -iu vagrant
    cd /vagrant
    bundle install
  SHELL
end
# Running in vagrant:
#   vagrant up
#   vagrant ssh
#   $ cd /vagrant
#   $ bundle exec jekyll build
## -P 4000 -> Must match the guest http forwarded port
## -w -I   -> Watch and incremental
## -H 0.0.0.0
#   $ bundle exec jekyll serve -P 4000 -w -H 0.0.0.0 -I


# TODO: Update all to newer  Version of Jekyll... (2.5.0 is too old)
# https://jekyllrb.com/docs/history/
# Update the bundle gemfile, the do bundle update. Test in vagrant, http://localhost:4000 
# then push to the staging site.
# Test there - then deploy.
# http://192.168.0.9:8082/job/build_and_deploy_orionrobots/ - run this when it's tested.
# TODO: Remaining blog bits to convert: http://orionrobots.co.uk/tiki-view_blog.php?blogId=1
# Then any images there.
# Forums? Perhaps historically...