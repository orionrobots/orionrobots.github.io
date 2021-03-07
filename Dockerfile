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
FROM jekyll/builder:4

RUN gem install jekyll-toc
