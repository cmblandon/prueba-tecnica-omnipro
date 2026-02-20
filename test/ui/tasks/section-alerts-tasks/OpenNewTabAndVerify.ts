import { Task, Wait, Duration } from '@serenity-js/core';
import { Click, Switch, Page, isVisible, Text } from '@serenity-js/web';
import { Ensure, includes } from '@serenity-js/assertions';
import { BrowserWindowsPage } from '../../pages/BrowserWindowsPage';

export const OpenNewTabAndVerify = () =>
  Task.where(
    `#actor opens a new tab and verifies it`,
    Click.on(BrowserWindowsPage.newTabButton),

    // Wait briefly for the new tab to be created
    Wait.for(Duration.ofSeconds(2)),

    // Switch to the new tab (matching URL containing 'sample')
    Switch.to(Page.whichUrl(includes('sample'))).and(
      Ensure.eventually(BrowserWindowsPage.sampleHeading, isVisible()),
      Ensure.eventually(
        Text.of(BrowserWindowsPage.sampleHeading),
        includes('This is a sample page'),
      ),
    ),
  );
