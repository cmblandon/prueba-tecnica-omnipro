import { Task } from '@serenity-js/core';
import { Click, isVisible, Page } from '@serenity-js/web';
import { Ensure, includes } from '@serenity-js/assertions';
import { HomePage } from '../../pages/HomePage';
import { PracticeForm } from '../../pages/PracticeForm';
import { ElementsPage } from '../../pages/ElementsPage';

export const NavigateToPracticeForm = () =>
  Task.where(
    `#actor navigates to Practice Form`,
    Click.on(HomePage.card('Forms')),
    Ensure.eventually(Page.current().url().href, includes('forms')),
    Click.on(ElementsPage.sideMenuItem('Practice Form')),
    Ensure.eventually(Page.current().url().href, includes('automation-practice-form')),
    Ensure.eventually(PracticeForm.firstNameInput, isVisible()),
  );
