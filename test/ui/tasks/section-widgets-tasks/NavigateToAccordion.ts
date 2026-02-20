import { Task } from '@serenity-js/core';
import { Click, isVisible, Page } from '@serenity-js/web';
import { Ensure, includes } from '@serenity-js/assertions';
import { HomePage } from '../../pages/HomePage';
import { ElementsPage } from '../../pages/ElementsPage';
import { AccordionPage } from '../../pages/AccordionPage';

export const NavigateToAccordion = () =>
  Task.where(
    `#actor navigates to the Accordion section`,
    Click.on(HomePage.card('Widgets')),
    Ensure.eventually(Page.current().url().href, includes('widgets')),
    Click.on(ElementsPage.sideMenuItem('Accordian')),
    Ensure.eventually(Page.current().url().href, includes('accordian')),
    Ensure.eventually(AccordionPage.panelHeader('What is Lorem Ipsum?'), isVisible()),
  );
