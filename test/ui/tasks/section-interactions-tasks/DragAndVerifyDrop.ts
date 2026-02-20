import { Task } from '@serenity-js/core';
import { Scroll, Text } from '@serenity-js/web';
import { Ensure, includes } from '@serenity-js/assertions';
import { DroppablePage } from '../../pages/DroppablePage';
import { MouseDragAndDrop } from '../../interactions/MouseDragAndDrop';

export const DragAndVerifyDrop = () =>
  Task.where(
    `#actor drags the element to the drop zone and verifies the result`,
    Scroll.to(DroppablePage.draggable),
    MouseDragAndDrop(DroppablePage.draggable, DroppablePage.dropZone),
    Ensure.eventually(
      Text.of(DroppablePage.dropZone),
      includes('Dropped!'),
    ),
  );
