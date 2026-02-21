Feature: Section Elements
  As a visitor
  I want to interact with the Text Box section
  So that I can submit the form and see the submitted data displayed

  Background:
    Given the user opens the browser and navigates to "https://demoqa.com/"

  Scenario: Submit Text Box form successfully
    When the user navigates to the Text Box section
    And fills the form with:
      | fullName | email         |
      | John Doe | john@mail.com |
    Then the submitted data should be displayed
