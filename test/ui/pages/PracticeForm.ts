import { PageElement, By } from '@serenity-js/web';

export class PracticeForm {

  static firstNameInput = PageElement
    .located(By.id('firstName'))
    .describedAs('First Name input');

  static lastNameInput = PageElement
    .located(By.id('lastName'))
    .describedAs('Last Name input');

  static emailInput = PageElement
    .located(By.id('userEmail'))
    .describedAs('Email input');

  static genderLabel = (gender: string) => {
    const genderMap: { [key: string]: string } = {
      Male: 'gender-radio-1',
      Female: 'gender-radio-2',
      Other: 'gender-radio-3',
    };
    const id = genderMap[gender] ?? 'gender-radio-1';
    return PageElement
      .located(By.css(`label[for='${id}']`))
      .describedAs(`${gender} gender label`);
  };

  static mobileInput = PageElement
    .located(By.id('userNumber'))
    .describedAs('Mobile input');

  static currentAddressInput = PageElement
    .located(By.id('currentAddress'))
    .describedAs('Current Address input');

  static submitButton = PageElement
    .located(By.id('submit'))
    .describedAs('Submit button');

  static confirmationModal = PageElement
    .located(By.id('example-modal-sizes-title-lg'))
    .describedAs('Confirmation modal title');

  static closeModalButton = PageElement
    .located(By.id('closeLargeModal'))
    .describedAs('Close modal button');
}
