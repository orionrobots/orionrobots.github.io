Feature: Recent Posts Thumbnails

  Scenario: All recent posts should have thumbnail images
    Given the Staging site is started
    When the index page is visited
    Then the recent posts list should be present
    And each recent post should have a picture tag with an img element