Feature: Article Content Tests

  Scenario: Article has required content elements
    Given the Staging site is started
    When I navigate to the article "/2025/07/08/08-comparing-anker-power-packs.html"
    Then the article should have a set of tags in a nav linking to tag slugs
    And the article should have a post header in an H2 element
    And the page title should contain the post title and "orionrobots"
    And the article should have visible images inside the article tag
    And the article should have a date and author in a div element
    And the page should have a footer with Discord and YouTube links
    And the page should have the main menu in a nav element at the top

  Scenario: Desktop view layout does not overflow
    Given the Staging site is started
    When I navigate to the article "/2025/07/08/08-comparing-anker-power-packs.html"
    And I am in desktop view
    Then the images, tables and text should not overflow the article container