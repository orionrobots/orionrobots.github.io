FROM ubuntu:22.04
RUN apt-get -y update && \
    apt-get install -y ca-certificates linkchecker python3-pip curl --no-install-recommends \
    && apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
RUN pip3 install --trusted-host pypi.org --trusted-host pypi.python.org --trusted-host files.pythonhosted.org jinja2

WORKDIR /linkchecker
COPY filter_csv.py output_template.html linkchecker.conf run_linkcheck.sh ./

# Make script executable
RUN chmod +x run_linkcheck.sh

# Default command to run linkchecker
CMD ["linkchecker", "--config=linkchecker.conf"]
