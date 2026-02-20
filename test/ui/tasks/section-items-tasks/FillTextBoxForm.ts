import { Task } from '@serenity-js/core';
import { Enter, Click, Scroll } from '@serenity-js/web';
import { ElementsPage } from '../../pages/ElementsPage';
import { User } from '../../../models/User';

export const FillTextBoxForm = (user: User) =>
  Task.where(
    `#actor fills the Text Box form`,
    Scroll.to(ElementsPage.fullNameInput),
    Enter.theValue(user.fullName).into(ElementsPage.fullNameInput),
    Enter.theValue(user.email).into(ElementsPage.emailInput),
    Scroll.to(ElementsPage.submitButton),
    Click.on(ElementsPage.submitButton),
  );
