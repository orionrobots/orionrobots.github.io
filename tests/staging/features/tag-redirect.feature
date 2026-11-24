Feature: Renamed tag redirects

  Scenario Outline: Retired tags redirect to their replacement
    Given the Staging site is started
    When I request "<path>" without following redirects
    Then the response status should be 301
    And the Location header should be "<location>"

    Examples:
      | path                  | location                                      |
      | /tags/robot-program   | https://orionrobots.co.uk/tags/robot-programming/ |
      | /tags/robot-program/  | https://orionrobots.co.uk/tags/robot-programming/ |
      | /tags/robotics-programming   | https://orionrobots.co.uk/tags/robot-programming/ |
      | /tags/robotics-programming/  | https://orionrobots.co.uk/tags/robot-programming/ |
      | /tags/python   | https://orionrobots.co.uk/tags/python-programming/ |
      | /tags/python/  | https://orionrobots.co.uk/tags/python-programming/ |
