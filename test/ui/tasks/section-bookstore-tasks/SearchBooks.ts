import { Task } from '@serenity-js/core';
import { Enter, Scroll } from '@serenity-js/web';
import { BookStorePage } from '../../pages/BookStorePage';

export const SearchBooks = (term: string) =>
  Task.where(
    `#actor searches for books with term "${term}"`,
    Scroll.to(BookStorePage.searchBox),
    Enter.theValue(term).into(BookStorePage.searchBox),
  );
