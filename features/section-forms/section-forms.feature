Feature: Section Forms
  As a visitor
  I want to fill in the Practice Form
  So that I can confirm the form submission is successful

  Background:
    Given the user opens the browser and navigates to "https://demoqa.com/"

  Scenario: Submit Practice Form successfully
    When the user navigates to the Practice Form section
    And fills the Practice Form with:
      | firstName | lastName | email         | gender | mobile     | currentAddress  |
      | John      | Doe      | john@mail.com | Male   | 1234567890 | 123 Main Street |
    Then a confirmation modal should appear
