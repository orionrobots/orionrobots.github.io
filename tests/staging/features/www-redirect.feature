Feature: www and http redirect to the https apex domain

  Scenario Outline: www host is 301 redirected to the https apex with the path preserved
    When I request "<path>" with host "www.orionrobots.co.uk" without following redirects
    Then the response status should be 301
    And the Location header should be "<location>"

    Examples:
      | path                     | location                                          |
      | /                        | https://orionrobots.co.uk/                        |
      | /construction_guide.html | https://orionrobots.co.uk/construction_guide.html |

  Scenario Outline: apex host over plain http is 301 redirected to https with the path preserved
    When I request "<path>" with host "orionrobots.co.uk" without following redirects
    Then the response status should be 301
    And the Location header should be "<location>"

    Examples:
      | path                     | location                                          |
      | /                        | https://orionrobots.co.uk/                        |
      | /construction_guide.html | https://orionrobots.co.uk/construction_guide.html |

  Scenario: other hosts such as the staging host are not redirected
    When I request "/construction_guide.html" without following redirects
    Then the response status should be 200
