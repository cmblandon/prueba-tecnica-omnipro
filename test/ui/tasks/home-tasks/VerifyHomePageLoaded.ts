import { Task } from '@serenity-js/core';
import { Ensure, equals } from '@serenity-js/assertions';
import { Page } from '@serenity-js/web';
import { HomePage } from '../../pages/HomePage';

export const VerifyHomePageLoaded = () => Task.where(`#actor verifies the home page has loaded`,
  Ensure.eventually(Page.current().title(), equals('demosite')),
  Ensure.eventually(HomePage.logo.isVisible(), equals(true))
);
