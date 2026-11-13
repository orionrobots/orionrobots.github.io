# Staging Test Environment

This is an HTTP staging area - to test interactions between orionrobots code, htaccess files, and Apache. The conf files intend to reflect a hosting company's settings.

This staging environment is used by the GitHub Actions workflows to test the built site before deployment.

`default.conf` is the one server config, used by both CI staging and the local `http_serve` service. The production `htaccess` is passed through into `_site/.htaccess` and applied on top of it. Known gaps against the IONOS hosting are tracked in issues #554, #555 and #556.
