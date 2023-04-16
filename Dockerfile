# FROM ruby
# RUN apt-get -y update && apt-get install -y rsync

# # ruby-dev
# ENV APP_HOME /myapp
# RUN mkdir $APP_HOME
# WORKDIR $APP_HOME

# ADD Gemfile* $APP_HOME/
# # --- Add this to your Dockerfile ---
# ENV BUNDLE_GEMFILE=$APP_HOME/Gemfile \
#   BUNDLE_JOBS=2 \
#   BUNDLE_PATH=/bundle
# RUN bundle install
# COPY . $APP_HOME

# # RUN bundle exec jekyll --version
# # RUN bundle exec jekyll build

# Dockerfile for orionrobots static builder

FROM jekyll/builder:4.2.2

RUN apk add imagemagick
RUN gem install jekyll-toc rmagick webrick
RUN mkdir -p /tmp/_site && chmod o+rwx /tmp/_site
# RUN mkdir -p /tmp/_cache && chmod o+rwx /tmp/_cache
# ENV OUTPUT /srv/jekyll/_site
# ENTRYPOINT mkdir -p "$OUTPUT" && chmod o+rwx "$OUTPUT" && $@
