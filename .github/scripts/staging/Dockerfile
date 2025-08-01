FROM httpd:2.4.64

# Install curl for healthcheck
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Copy the built site content (context is _site directory)
COPY . /usr/local/apache2/htdocs/
# Copy the Apache configuration (copied to _site in workflow as httpd.conf)
COPY httpd.conf /usr/local/apache2/conf/httpd.conf
