Feature: Section Alerts, Frame & Windows
  As a visitor
  I want to interact with alerts and browser windows
  So that I can verify alert handling and new tab/window functionality

  Scenario: Accept a simple alert
    Given the user opens the browser and navigates to "https://demoqa.com/"
    When the user navigates to the Alerts section
    And the user triggers and accepts the simple alert
    Then the alert should be accepted

  Scenario: Open a new tab from Browser Windows
    Given the user opens the browser and navigates to "https://demoqa.com/"
    When the user navigates to the Alerts section
    And the user navigates to the Browser Windows section
    And the user clicks the New Tab button
    Then a new tab should open with the sample page heading
