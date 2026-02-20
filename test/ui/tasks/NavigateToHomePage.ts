import { Task } from '@serenity-js/core';
import { Navigate } from '@serenity-js/web';

export const NavigateToHomePage = () =>
  Task.where(`#actor opens the DemoQA home page`,
    Navigate.to('/')
  );
  