FROM ubuntu:22.04
RUN apt-get -y update && \
    apt-get install -y ca-certificates linkchecker python3-pip --no-install-recommends \
    && apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
RUN pip3 install jinja2

WORKDIR /linkchecker
COPY filter_csv.py output_template.html linkchecker.conf ./

# Default command to run linkchecker
ENTRYPOINT ["linkchecker", "--config=linkchecker.conf"]
