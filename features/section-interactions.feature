Feature: Section Interactions - Drag and Drop
  As a visitor
  I want to drag an element to a drop zone
  So that I can verify the drag and drop functionality works correctly

  Background:
    Given the user opens the browser and navigates to "https://demoqa.com/"

  Scenario: Drag element to drop zone successfully
    When the user navigates to the Droppable section
    And the user drags the element to the drop zone
    Then the drop zone should confirm the element was dropped
