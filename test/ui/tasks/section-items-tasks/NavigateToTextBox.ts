import { Task } from '@serenity-js/core';
import { Click, isVisible, Page } from '@serenity-js/web';
import { HomePage } from '../../pages/HomePage';
import { ElementsPage } from '../../pages/ElementsPage';
import { Ensure, includes } from '@serenity-js/assertions';

export const NavigateToTextBox = () =>
  Task.where(
    `#actor navigates to Text Box`,
    Click.on(HomePage.card('Elements')),
    Ensure.eventually(Page.current().url().href, includes('elements')),
    Click.on(ElementsPage.sideMenuItem('Text Box')),
    Ensure.eventually(Page.current().url().href, includes('text-box')),
    Ensure.eventually(ElementsPage.fullNameInput, isVisible()),
  );