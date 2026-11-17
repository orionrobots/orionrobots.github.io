Feature: www redirects to the apex domain

  Scenario Outline: www host is 301 redirected to the https apex with the path preserved
    When I request "<path>" with host "www.orionrobots.co.uk" without following redirects
    Then the response status should be 301
    And the Location header should be "<location>"

    Examples:
      | path                     | location                                          |
      | /                        | https://orionrobots.co.uk/                        |
      | /construction_guide.html | https://orionrobots.co.uk/construction_guide.html |
