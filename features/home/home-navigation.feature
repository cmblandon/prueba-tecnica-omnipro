Feature: Home Page Navigation
  As a visitor
  I want to access the DemoQA home page
  So that I can verify the main menu sections are displayed correctly

  Background:
    Given the user opens the browser and navigates to "https://demoqa.com/"

  Scenario: Navigate to the home page and verify main menu sections
    Then the home page should load successfully
    And the main menu sections should be displayed:
      | Elements                |
      | Forms                   |
      | Alerts, Frame & Windows |
      | Widgets                 |
      | Interactions            |
      | Book Store Application  |
