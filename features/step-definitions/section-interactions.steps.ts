import { When, Then } from '@cucumber/cucumber';
import { actorInTheSpotlight } from '@serenity-js/core';
import { NavigateToDroppable } from '../../test/ui/tasks/section-interactions-tasks/NavigateToDroppable';
import { DragAndVerifyDrop } from '../../test/ui/tasks/section-interactions-tasks/DragAndVerifyDrop';

When('the user navigates to the Droppable section', async () => {
  await actorInTheSpotlight().attemptsTo(
    NavigateToDroppable(),
  );
});

When('the user drags the element to the drop zone', async () => {
  await actorInTheSpotlight().attemptsTo(
    DragAndVerifyDrop(),
  );
});

Then('the drop zone should confirm the element was dropped', async () => {
  // Verification is done inside DragAndVerifyDrop task
  // (asserts drop zone text includes 'Dropped!')
});
