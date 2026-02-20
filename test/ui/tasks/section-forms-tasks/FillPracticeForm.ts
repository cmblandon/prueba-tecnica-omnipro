import { Task } from '@serenity-js/core';
import { Click, Enter, Scroll } from '@serenity-js/web';
import { PracticeForm } from '../../pages/PracticeForm';
import { User } from '../../../models/User';

export const FillPracticeForm = (user: User) =>
  Task.where(
    `#actor fills the Practice Form`,
    Scroll.to(PracticeForm.firstNameInput),
    Enter.theValue(user.firstName!).into(PracticeForm.firstNameInput),
    Enter.theValue(user.lastName!).into(PracticeForm.lastNameInput),
    Enter.theValue(user.email ?? '').into(PracticeForm.emailInput),
    Click.on(PracticeForm.genderLabel(user.gender ?? 'Male')),
    Enter.theValue(user.mobile!).into(PracticeForm.mobileInput),
    Enter.theValue(user.currentAddress ?? '').into(PracticeForm.currentAddressInput),
    Scroll.to(PracticeForm.submitButton),
    Click.on(PracticeForm.submitButton),
  );
