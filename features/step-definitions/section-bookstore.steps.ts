import { When, Then } from '@cucumber/cucumber';
import { actorInTheSpotlight } from '@serenity-js/core';
import { NavigateToBookStore } from '../../test/ui/tasks/section-bookstore-tasks/NavigateToBookStore';
import { SearchBooks } from '../../test/ui/tasks/section-bookstore-tasks/SearchBooks';
import { VerifySearchResults } from '../../test/ui/tasks/section-bookstore-tasks/VerifySearchResults';

When('the user navigates to the Book Store', async () => {
  await actorInTheSpotlight().attemptsTo(
    NavigateToBookStore(),
  );
});

When('the user searches for {string}', async (term: string) => {
  await actorInTheSpotlight().attemptsTo(
    SearchBooks(term),
  );
});

Then('the search results should contain books related to {string}', async (term: string) => {
  await actorInTheSpotlight().attemptsTo(
    VerifySearchResults(term),
  );
});
