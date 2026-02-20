import { Given, Then, DataTable } from '@cucumber/cucumber';
import { actorInTheSpotlight } from '@serenity-js/core';

import { OpenHomePage } from '../../test/ui/tasks/OpenHomePage';
import { VerifyHomePageLoaded } from '../../test/ui/tasks/VerifyHomePageLoaded';
import { VerifyMenuSections } from '../../test/ui/tasks/VerifyMenuSections';
import { NavigateToHomePage } from '../../test/ui/tasks/NavigateToHomePage';

Given(
  'the user opens the browser and navigates to {string}',
  async (url: string) => {
    await actorInTheSpotlight().attemptsTo(
      //OpenHomePage()
      NavigateToHomePage()
    );
  }
);

Then('the home page should load successfully', async () => {
  await actorInTheSpotlight().attemptsTo(
    VerifyHomePageLoaded()
  );
});

Then(
  'the main menu sections should be displayed:',
  async (dataTable: DataTable) => {
    const expectedSections: string[] = dataTable.raw().map(row => row[0]);

    await actorInTheSpotlight().attemptsTo(
      VerifyMenuSections.areDisplayed(expectedSections)
    );
  }
);
