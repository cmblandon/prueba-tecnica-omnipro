import { PageElement, PageElements, By } from '@serenity-js/web';

export class BookStorePage {

  static searchBox = PageElement
    .located(By.id('searchBox'))
    .describedAs('search box');

  // Book title links in results table — targets span elements with ids starting 'see-book-'
  static bookTitleLinks = PageElements
    .located(By.css('[id^="see-book-"]'))
    .describedAs('book title links');
}
