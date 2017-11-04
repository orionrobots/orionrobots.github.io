# -*- mode: ruby -*-
# vi: set ft=ruby :
Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"

  config.vm.network "forwarded_port", guest: 4000, host: 4000

  config.vm.provision "shell", inline: <<-SHELL
    apt-get update
    apt-get install -y ruby ruby-dev make gcc nodejs zlib1g-dev
    apt-get install -y rubygems nodejs
    sudo gem install bundler --no-rdoc --no-ri
  SHELL
end
# Running in vagrant:
#   vagrant up
#   vagrant ssh
#   $ cd /vagrant
#   $ bundle install
#   $ jekyll build
## -P 4000 -> Must match the guest http forwarded port
## -w -I   -> Watch and incremental
## -H 0.0.0.0
#   $ bundle exec jekyll serve -P 4000 -w -H 0.0.0.0


# TODO: Update all to newer  Version of Jekyll... (2.4.0 is too old)
