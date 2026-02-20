import { PageElement, By } from '@serenity-js/web';

export class BrowserWindowsPage {

  static newTabButton = PageElement
    .located(By.id('tabButton'))
    .describedAs('New Tab button');

  static newWindowButton = PageElement
    .located(By.id('windowButton'))
    .describedAs('New Window button');

  static sampleHeading = PageElement
    .located(By.id('sampleHeading'))
    .describedAs('Sample page heading');
}
