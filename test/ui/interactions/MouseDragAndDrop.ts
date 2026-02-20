import { Answerable, Interaction } from '@serenity-js/core';
import { PageElement } from '@serenity-js/web';
import type { Locator } from 'playwright-core';

/**
 * Custom Serenity/JS Interaction implementing Playwright's manual mouse drag approach.
 *
 * Moves the mouse to the source, presses down, then moves twice to the target
 * (the double move ensures the 'dragover' event fires across all browsers
 * and custom drag implementations), then releases.
 *
 * @see https://playwright.dev/docs/input#drag-and-drop
 */
export const MouseDragAndDrop = (
  draggable: Answerable<PageElement>,
  dropZone: Answerable<PageElement>,
) =>
  Interaction.where(`#actor drags element to drop zone`, async actor => {
    const resolvedDraggable = await actor.answer(draggable);
    const resolvedDropZone  = await actor.answer(dropZone);

    const source = await resolvedDraggable.nativeElement() as Locator;
    const target = await resolvedDropZone.nativeElement()  as Locator;

    const sourceBox = await source.boundingBox();
    const targetBox = await target.boundingBox();

    if (sourceBox && targetBox) {
      // Move to center of source and press down
      await source.page().mouse.move(
        sourceBox.x + sourceBox.width  / 2,
        sourceBox.y + sourceBox.height / 2,
      );
      await source.page().mouse.down();

      // Move to center of target — two moves to trigger dragover across all browsers
      await source.page().mouse.move(
        targetBox.x + targetBox.width  / 2,
        targetBox.y + targetBox.height / 2,
      );
      await source.page().mouse.move(
        targetBox.x + targetBox.width  / 2,
        targetBox.y + targetBox.height / 2,
      );

      // Release to drop
      await source.page().mouse.up();
    }
  });
