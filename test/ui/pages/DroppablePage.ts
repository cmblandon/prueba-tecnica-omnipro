import { PageElement, By } from '@serenity-js/web';

export class DroppablePage {

  // Scope to the Simple tab container to avoid duplicate IDs across tabs
  static simpleContainer = PageElement
    .located(By.id('simpleDropContainer'))
    .describedAs('Simple tab container');

  static draggable = PageElement
    .located(By.css('#simpleDropContainer #draggable'))
    .describedAs('draggable element');

  static dropZone = PageElement
    .located(By.css('#simpleDropContainer #droppable'))
    .describedAs('drop zone');
}
