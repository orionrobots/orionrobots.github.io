FROM ubuntu:xenial-20210804
RUN apt-get -y update && \
    apt-get install -y ca-certificates linkchecker python3-pip --no-install-recommends \
    && apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
RUN pip3 install jinja2
