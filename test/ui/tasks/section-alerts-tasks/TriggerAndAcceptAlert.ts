import { Task, Wait } from '@serenity-js/core';
import { Click, ModalDialog } from '@serenity-js/web';
import { Ensure, equals, isPresent } from '@serenity-js/assertions';
import { AlertsPage } from '../../pages/AlertsPage';

export const TriggerAndAcceptAlert = () =>
  Task.where(
    `#actor triggers and accepts a simple alert`,

    // Register the handler to accept the next dialog BEFORE triggering it
    ModalDialog.acceptNext(),

    // Click the button that triggers the alert
    Click.on(AlertsPage.alertButton),

    // Wait for the dialog to be handled
    Wait.until(ModalDialog, isPresent()),

    // Verify the dialog was accepted
    Ensure.that(ModalDialog.lastDialogState(), equals('accepted')),
  );
