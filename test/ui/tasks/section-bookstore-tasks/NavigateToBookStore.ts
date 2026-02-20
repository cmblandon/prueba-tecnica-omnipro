import { Task } from '@serenity-js/core';
import { Click, Navigate, Scroll, isVisible, Page } from '@serenity-js/web';
import { Ensure, includes } from '@serenity-js/assertions';
import { HomePage } from '../../pages/HomePage';
import { BookStorePage } from '../../pages/BookStorePage';

export const NavigateToBookStore = () =>
  Task.where(
    `#actor navigates to the Book Store`,
    Click.on(HomePage.card('Book Store Application')),
    Ensure.eventually(Page.current().url().href, includes('books')),
    Scroll.to(BookStorePage.searchBox),
    Ensure.eventually(BookStorePage.searchBox, isVisible()),
  );
