# -*- mode: ruby -*-
# vi: set ft=ruby :
Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"

  config.vm.network "forwarded_port", guest: 4000, host: 4000

  config.vm.provision "shell", inline: <<-SHELL
    apt-get update
    apt-get install -y ruby ruby-dev make gcc nodejs zlib1g-dev
    sudo gem install bundler --no-rdoc --no-ri
    sudo gem install jekyll --no-rdoc --no-ri
    sudo gem install github-pages --no-rdoc --no-ri
  SHELL
end
