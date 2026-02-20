import { Task } from '@serenity-js/core';
import { Click, isVisible, Page } from '@serenity-js/web';
import { Ensure, includes } from '@serenity-js/assertions';
import { HomePage } from '../../pages/HomePage';
import { AlertsPage } from '../../pages/AlertsPage';
import { ElementsPage } from '../../pages/ElementsPage';

export const NavigateToAlerts = () =>
  Task.where(
    `#actor navigates to Alerts`,
    Click.on(HomePage.card('Alerts, Frame & Windows')),
    Ensure.eventually(Page.current().url().href, includes('alertsWindows')),
    Click.on(ElementsPage.sideMenuItem('Alerts')),
    Ensure.eventually(Page.current().url().href, includes('alerts')),
    Ensure.eventually(AlertsPage.alertButton, isVisible()),
  );
