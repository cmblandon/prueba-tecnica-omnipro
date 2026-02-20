import { When, Then } from '@cucumber/cucumber';
import { actorInTheSpotlight } from '@serenity-js/core';
import { NavigateToAlerts } from '../../test/ui/tasks/section-alerts-tasks/NavigateToAlerts';
import { TriggerAndAcceptAlert } from '../../test/ui/tasks/section-alerts-tasks/TriggerAndAcceptAlert';
import { NavigateToBrowserWindows } from '../../test/ui/tasks/section-alerts-tasks/NavigateToBrowserWindows';
import { OpenNewTabAndVerify } from '../../test/ui/tasks/section-alerts-tasks/OpenNewTabAndVerify';

When('the user navigates to the Alerts section', async () => {
  await actorInTheSpotlight().attemptsTo(
    NavigateToAlerts(),
  );
});

When('the user triggers and accepts the simple alert', async () => {
  await actorInTheSpotlight().attemptsTo(
    TriggerAndAcceptAlert(),
  );
});

Then('the alert should be accepted', async () => {
  // Alert acceptance is verified inside TriggerAndAcceptAlert task
  // via ModalDialog.lastDialogState()
});

When('the user navigates to the Browser Windows section', async () => {
  await actorInTheSpotlight().attemptsTo(
    NavigateToBrowserWindows(),
  );
});

When('the user clicks the New Tab button', async () => {
  await actorInTheSpotlight().attemptsTo(
    OpenNewTabAndVerify(),
  );
});

Then('a new tab should open with the sample page heading', async () => {
  // Verification is done inside OpenNewTabAndVerify task
  // (switches to new tab and checks heading text)
});
