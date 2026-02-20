import { PageElement, PageElements, By } from '@serenity-js/web';

export class HomePage {

  static logo = PageElement
    .located(By.css('header a[href="https://demoqa.com"]'))
    .describedAs('home logo link');

  static sectionTitles = PageElements
    .located(By.css('.category-cards h5'))
    .describedAs('main menu sections');
}