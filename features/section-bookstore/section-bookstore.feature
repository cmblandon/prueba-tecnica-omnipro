Feature: Section Book Store Application
  As a visitor
  I want to search for books by keyword
  So that I can verify the search results are relevant

  Background:
    Given the user opens the browser and navigates to "https://demoqa.com/"

  Scenario: Search for a book by keyword
    When the user navigates to the Book Store
    And the user searches for "Git"
    Then the search results should contain books related to "Git"
