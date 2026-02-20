import { Task } from '@serenity-js/core';
import { Ensure, includes } from '@serenity-js/assertions';
import { Text, isVisible } from '@serenity-js/web';
import { ElementsPage } from '../../pages/ElementsPage';

export const VerifySubmittedValues = (fullName: string, email: string) =>
  Task.where(
    `#actor verifies the submitted values`,
    
    // Ensure confirmation container is visible
    Ensure.eventually(
      ElementsPage.outputField, isVisible(),  
    ),
    
    // Validate Full Name is reflected in output
    Ensure.eventually(
      Text.of(ElementsPage.outputName),
      includes(fullName)
    ),
    
    // Validate Email is reflected in output
    Ensure.eventually(
      Text.of(ElementsPage.outputEmail),
      includes(email)
    ),
  );