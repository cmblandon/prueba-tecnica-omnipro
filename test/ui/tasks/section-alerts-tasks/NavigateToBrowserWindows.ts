import { Task } from '@serenity-js/core';
import { Click, isVisible, Page } from '@serenity-js/web';
import { Ensure, includes } from '@serenity-js/assertions';
import { ElementsPage } from '../../pages/ElementsPage';
import { BrowserWindowsPage } from '../../pages/BrowserWindowsPage';

export const NavigateToBrowserWindows = () =>
  Task.where(
    `#actor navigates to Browser Windows`,
    Click.on(ElementsPage.sideMenuItem('Browser Windows')),
    Ensure.eventually(Page.current().url().href, includes('browser-windows')),
    Ensure.eventually(BrowserWindowsPage.newTabButton, isVisible()),
  );
