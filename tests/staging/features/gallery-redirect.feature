Feature: Gallery Trailing Slash Redirect

  Scenario: Gallery image page with trailing slash redirects to .html and shows images
    Given the Staging site is started
    When I navigate to the article "/galleries/inside__control_box/target0/"
    Then the page URL should end with ".html"
    And the article should have visible images inside the article tag
