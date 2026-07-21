Feature: Website Logo

  Scenario: Logo on main index in staging
    Given the Staging site is started
    When the index page is visited
    Then the Logo should be displayed in the top left corner
