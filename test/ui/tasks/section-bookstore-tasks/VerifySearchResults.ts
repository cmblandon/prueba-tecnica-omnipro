import { Task } from '@serenity-js/core';
import { Text } from '@serenity-js/web';
import { Ensure, containAtLeastOneItemThat, includes } from '@serenity-js/assertions';
import { BookStorePage } from '../../pages/BookStorePage';

export const VerifySearchResults = (term: string) =>
  Task.where(
    `#actor verifies search results contain "${term}"`,
    Ensure.eventually(
      Text.ofAll(BookStorePage.bookTitleLinks),
      containAtLeastOneItemThat(includes(term)),
    ),
  );
