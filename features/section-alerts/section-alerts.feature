Feature: Section Alerts, Frame & Windows
  As a visitor
  I want to interact with alerts and browser windows
  So that I can verify alert handling and new tab/window functionality

  Background:
    Given the user opens the browser and navigates to "https://demoqa.com/"

  Scenario: Accept a simple alert
    When the user navigates to the Alerts section
    And the user triggers and accepts the simple alert

  Scenario: Open a new tab from Browser Windows
    When the user navigates to the Alerts section
    And the user navigates to the Browser Windows section
    And the user clicks the New Tab button
