import { PageElement, By } from '@serenity-js/web';

export class AlertsPage {

  static alertButton = PageElement
    .located(By.id('alertButton'))
    .describedAs('Simple alert button');

  static confirmButton = PageElement
    .located(By.id('confirmButton'))
    .describedAs('Confirm dialog button');

  static confirmResult = PageElement
    .located(By.id('confirmResult'))
    .describedAs('Confirm result text');
}
