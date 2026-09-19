@gallery
Feature: Tab image gallery

  Scenario: Gallery shows the first image and description on load
    Given the Staging site is started
    When I navigate to the article "/2023/06/26/fixing-the-battery-box.html"
    Then the gallery "corrosion_gallery" should show tab 1 in the current image and description

  Scenario: Clicking a tab swaps the current image and description
    Given the Staging site is started
    When I navigate to the article "/2023/06/26/fixing-the-battery-box.html"
    And I click tab 3 of the gallery "corrosion_gallery"
    Then the gallery "corrosion_gallery" should show tab 3 in the current image and description
    When I click tab 2 of the gallery "corrosion_gallery"
    Then the gallery "corrosion_gallery" should show tab 2 in the current image and description

  Scenario: Gallery description is plain text
    Given the Staging site is started
    When I navigate to the article "/2023/06/26/fixing-the-battery-box.html"
    And I click tab 2 of the gallery "corrosion_gallery"
    Then the gallery "corrosion_gallery" description should contain only text

  Scenario: Gallery treats a tab title containing markup as text
    Given the Staging site is started
    When I navigate to the article "/2023/06/26/fixing-the-battery-box.html"
    And I give tab 2 of the gallery "corrosion_gallery" a title containing markup and click it
    Then the gallery "corrosion_gallery" should show the markup title as text without running it
