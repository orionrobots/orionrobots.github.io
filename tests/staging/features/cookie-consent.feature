@cookies
Feature: Cookie consent

  Scenario: A new visitor sees the cookie consent bar and can dismiss it
    Given a new visitor with no cookies opens the index page
    Then the cookie consent bar should be shown
    When the cookie consent bar is dismissed
    Then the cookie consent bar should be hidden
    And the cookie consent cookie should be set
    When the index page is visited again
    Then the cookie consent bar should be hidden

  Scenario: The footer links to the privacy page
    Given a new visitor with no cookies opens the index page
    Then the footer privacy link should point to the privacy page
