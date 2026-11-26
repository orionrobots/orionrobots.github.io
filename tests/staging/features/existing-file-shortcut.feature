Feature: Real files and directories are served as-is by the htaccess rewrite rules

  Scenario Outline: an existing file or directory is served without being rewritten
    When I request "<path>" without following redirects
    Then the response status should be 200
    And the Content-Type header should contain "<type>"

    Examples:
      | path                     | type      |
      | /construction_guide.html | text/html |
      | /favicon.png             | image/png |
      | /forums/                 | text/html |

  Scenario: a path without .html still falls through to the .html page
    When I request "/construction_guide" without following redirects
    Then the response status should be 200

  Scenario: a missing path is not matched by the shortcut
    When I request "/nonexistent_zzz" without following redirects
    Then the response status should be 404
