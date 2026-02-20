import { Task } from '@serenity-js/core';
import { Click, isVisible, Text } from '@serenity-js/web';
import { Ensure, not, equals } from '@serenity-js/assertions';
import { AccordionPage } from '../../pages/AccordionPage';

export const ExpandAndVerifyAccordion = (panelTitle: string) =>
  Task.where(
    `#actor expands and verifies the "${panelTitle}" accordion panel`,

    // Click the panel header to expand it
    Click.on(AccordionPage.panelHeader(panelTitle)),

    // Verify the panel body becomes visible
    Ensure.eventually(AccordionPage.panelBody(panelTitle), isVisible()),

    // Verify the panel body contains non-empty text
    Ensure.eventually(
      Text.of(AccordionPage.panelBody(panelTitle)),
      not(equals('')),
    ),
  );
