Feature: Index page redirects

  Scenario Outline: An explicit index.html redirects to its directory URL
    Given the Staging site is started
    When I request "<path>" without following redirects
    Then the response status should be 301
    And the Location header should be "<location>"

    Examples:
      | path              | location |
      | /index.html       | https://orionrobots.co.uk/ |
      | /index.html?a=b   | https://orionrobots.co.uk/?a=b |
      | /tags/index.html  | https://orionrobots.co.uk/tags/ |

  Scenario: The directory URL itself still serves without redirecting
    Given the Staging site is started
    When I request "/" without following redirects
    Then the response status should be 200
