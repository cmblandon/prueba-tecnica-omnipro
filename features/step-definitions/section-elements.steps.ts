import { DataTable, When, Then} from '@cucumber/cucumber';
import { actorInTheSpotlight } from '@serenity-js/core';
import { NavigateToTextBox } from '../../test/ui/tasks/section-items-tasks/NavigateToTextBox';
import { FillTextBoxForm } from '../../test/ui/tasks/section-items-tasks/FillTextBoxForm';
import { VerifySubmittedValues } from '../../test/ui/tasks/section-items-tasks/VerifySubmittedValues';
import { User } from '../../test/models/User';

When('the user navigates to the Text Box section', async () => {
  await actorInTheSpotlight().attemptsTo(
    NavigateToTextBox(),  
  );
});

When('fills the form with:', async (table: DataTable) => {

  const user: User = table.hashes()[0] as unknown as User;

  await actorInTheSpotlight().attemptsTo(
    FillTextBoxForm(user)
  );
});

Then('the submitted data should be displayed', () => {
  return actorInTheSpotlight().attemptsTo(
    VerifySubmittedValues('John Doe', 'john@mail.com')
  );
});