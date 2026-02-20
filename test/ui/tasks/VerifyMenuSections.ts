import { Task } from '@serenity-js/core';
import { Ensure, equals } from '@serenity-js/assertions';
import { Text } from '@serenity-js/web';
import { HomePage } from '../pages/HomePage';

export const VerifyMenuSections = {
  areDisplayed: (expectedSections: string[]) => Task.where(
    `#actor verifies that menu sections are displayed`,
    Ensure.eventually(
      Text.ofAll(HomePage.sectionTitles).map(section => section.trim()),
      equals(expectedSections.map(section => section.trim()))
    )
  )
};