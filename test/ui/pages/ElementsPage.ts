import { PageElement, By } from '@serenity-js/web';

export class ElementsPage {

  static sideMenuItem = (name: string) => PageElement
    .located(By.cssContainingText('.element-list li span.text', name))
    .describedAs(`${ name } side menu item`);
  
  static userForm = PageElement
    .located(By.id('userForm'))
    .describedAs('User form');

  static fullNameInput = PageElement
    .located(By.id('userName'))
    .describedAs('Full Name input');

  static emailInput = PageElement
    .located(By.id('userEmail'))
    .describedAs('Email input');

  static submitButton = PageElement
    .located(By.id('submit'))
    .describedAs('Submit button');

   static outputField = PageElement
    .located(By.id('output'))
    .describedAs('Form output');

  static outputName = PageElement
    .located(By.id('name'))
    .describedAs('Output Full Name');

  static outputEmail = PageElement
    .located(By.id('email'))
    .describedAs('Output Email');
}
