import { PageElement, PageElements, By } from '@serenity-js/web';

export class HomePage {

  static logo = PageElement
    .located(By.css('header a[href="https://demoqa.com"]'))
    .describedAs('home logo link');

  static sectionTitles = PageElements
    .located(By.css('.category-cards h5'))
    .describedAs('main menu sections');

    static card(name: string) {
    return PageElement
      .located(By.xpath(`//h5[normalize-space()='${name}']`))
      .describedAs(`${name} card`);
  }
}