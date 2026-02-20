import { DataTable, When, Then } from '@cucumber/cucumber';
import { actorInTheSpotlight } from '@serenity-js/core';
import { NavigateToPracticeForm } from '../../test/ui/tasks/section-forms-tasks/NavigateToPracticeForm';
import { FillPracticeForm } from '../../test/ui/tasks/section-forms-tasks/FillPracticeForm';
import { VerifyPracticeFormSubmission } from '../../test/ui/tasks/section-forms-tasks/VerifyPracticeFormSubmission';
import { User } from '../../test/models/User';

When('the user navigates to the Practice Form section', async () => {
  await actorInTheSpotlight().attemptsTo(
    NavigateToPracticeForm(),
  );
});

When('fills the Practice Form with:', async (table: DataTable) => {
  const user: User = table.hashes()[0] as unknown as User;

  await actorInTheSpotlight().attemptsTo(
    FillPracticeForm(user),
  );
});

/**
 * Verifies the confirmation modal displays the correct full name
 * derived from the firstName + lastName submitted in the form.
 */

Then('a confirmation modal should appear', async () => {
  await actorInTheSpotlight().attemptsTo(
    VerifyPracticeFormSubmission(),
  );
});
