Feature: Section Widgets - Accordion
  As a visitor
  I want to expand and collapse accordion panels
  So that I can verify each panel displays its content correctly

  Background:
    Given the user opens the browser and navigates to "https://demoqa.com/"

  Scenario: Expand accordion panels and verify content
    When the user navigates to the Accordion section
    And the user expands the accordion panel "What is Lorem Ipsum?"
    And the user expands the accordion panel "Where does it come from?"
    And the user expands the accordion panel "Why do we use it?"
