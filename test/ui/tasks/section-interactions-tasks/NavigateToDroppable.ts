import { Task } from '@serenity-js/core';
import { Click, Page, Scroll } from '@serenity-js/web';
import { Ensure, includes } from '@serenity-js/assertions';
import { HomePage } from '../../pages/HomePage';
import { ElementsPage } from '../../pages/ElementsPage';
import { DroppablePage } from '../../pages/DroppablePage';

export const NavigateToDroppable = () =>
  Task.where(
    `#actor navigates to the Droppable section`,
    Click.on(HomePage.card('Interactions')),
    Ensure.eventually(Page.current().url().href, includes('interaction')),
    Click.on(ElementsPage.sideMenuItem('Droppable')),
    Ensure.eventually(Page.current().url().href, includes('droppable')),
    Scroll.to(DroppablePage.draggable),
  );
