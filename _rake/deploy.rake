require "rubygems"
require 'rake'
require 'net/sftp'
require 'zip'

desc "rsync deploy site."
task :sync do
    #params - site/username to deploy to
    site = ENV['site']
    username = ENV['username']
    #regen
    system("jekyll build")
    #sync
    path = "_site/"
    system("rsync -rvt --exclude-from=_rake/rsync_exclude --delete #{path} #{username}@#{site}:public_html/")

end #task sync

# C:\Users\danny\Dropbox\orionrobots.github.io>jekyll build && rsync -prvt --delete --exclude-from=_rake/rsync_exclude --chmod=u=rwx,g=rx,o=rx _site/ orionrob@orionrobots.co.uk:public_html/

desc "deploy site."
task :deploy do
    #params - site/username to deploy to
    site = ENV['site']
    username = ENV['username']
    #regen
    system("jekyll build")
    #tarball the site dir
    puts "recreating zip"
    rm_f("site.zip")
    path = "_site/"
    Zip::File.open('site.zip', Zip::File::CREATE) do |zipfile|
      Dir[File.join(path, '**', '**')].each do | file |
        zipfile.add(file.sub(path, ''), file)
      end
      zipfile.add(".htaccess", File.join(path, ".htaccess"))
    end
    puts "zipped. Connecting to remote host"
    #connect to remote server using keyfile
    Net::SSH.start(site, username) do |ssh|
        #Copy over zip
        # upload a file or directory to the remote host
        puts "Starting upload"
        ssh.sftp.upload!("site.zip", "site.zip") do |event, uploader, *args|
            case event
            when :open then
              # args[0] : file metadata
              puts "starting upload: #{args[0].local} -> #{args[0].remote} (#{args[0].size} bytes}"
            when :put then
              # args[0] : file metadata
              # args[1] : byte offset in remote file
              # args[2] : data being written (as string)
              print "writing #{args[2].length} bytes to #{args[0].remote} starting at #{args[1]}\r"
            when :close then
              # args[0] : file metadata
              puts "\nfinished with #{args[0].remote}"
            when :mkdir then
              # args[0] : remote path name
              puts "creating directory #{args[0]}"
            when :finish then
              puts "\nUpload done!"
            end
        end
        #unzip
        puts "Extracting files on remote site"
        ssh.exec! "cd public_html && unzip -q -o ../site.zip" 
        puts "Done"
    end
end #task deploy