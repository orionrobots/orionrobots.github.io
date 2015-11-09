FROM ruby
RUN apt-get -y update && apt-get install -y rsync
# ruby-dev
RUN gem install jekyll
RUN gem install kramdown
ENV APP_HOME /myapp
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

ADD Gemfile* $APP_HOME/
# --- Add this to your Dockerfile ---
ENV BUNDLE_GEMFILE=$APP_HOME/Gemfile \
  BUNDLE_JOBS=2 \
  BUNDLE_PATH=/bundle

RUN bundle install