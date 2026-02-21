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
