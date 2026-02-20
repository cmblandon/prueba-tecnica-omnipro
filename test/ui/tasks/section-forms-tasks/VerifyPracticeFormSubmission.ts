import { Task } from '@serenity-js/core';
import { Ensure, includes } from '@serenity-js/assertions';
import { Text, isVisible } from '@serenity-js/web';
import { PracticeForm } from '../../pages/PracticeForm';

export const VerifyPracticeFormSubmission = () =>
  Task.where(
    `#actor verifies the Practice Form submission`,

    // Ensure the confirmation modal is visible
    Ensure.eventually(
      PracticeForm.confirmationModal, isVisible(),
    ),

    // Validate the modal title contains the expected text
    Ensure.eventually(
      Text.of(PracticeForm.confirmationModal),
      includes('Thanks for submitting the form'),
    ),
  );
