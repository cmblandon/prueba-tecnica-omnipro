import { PageElement, By } from '@serenity-js/web';

export class DroppablePage {

  // Simple By.id - only one #draggable exists on the active tab
  static draggable = PageElement
    .located(By.id('draggable'))
    .describedAs('draggable element');

  // #droppable exists in multiple tabs — scope to the Simple tab container
  static dropZone = PageElement
    .located(By.css('#simpleDropContainer #droppable'))
    .describedAs('drop zone');
}
