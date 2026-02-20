import { When, Then } from '@cucumber/cucumber';
import { actorInTheSpotlight } from '@serenity-js/core';
import { NavigateToAccordion } from '../../test/ui/tasks/section-widgets-tasks/NavigateToAccordion';
import { ExpandAndVerifyAccordion } from '../../test/ui/tasks/section-widgets-tasks/ExpandAndVerifyAccordion';

When('the user navigates to the Accordion section', async () => {
  await actorInTheSpotlight().attemptsTo(
    NavigateToAccordion(),
  );
});

When('the user expands the accordion panel {string}', async (panelTitle: string) => {
  await actorInTheSpotlight().attemptsTo(
    ExpandAndVerifyAccordion(panelTitle),
  );
});

Then('all accordion panels should display their content', async () => {
  // Verification is done inside each ExpandAndVerifyAccordion call
  // Each panel was already verified to be visible and contain text
});
