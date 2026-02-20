import { Task } from '@serenity-js/core';
import { ExecuteScript, Text } from '@serenity-js/web';
import { Ensure, includes } from '@serenity-js/assertions';
import { DroppablePage } from '../../pages/DroppablePage';

export const DragAndVerifyDrop = () =>
  Task.where(
    `#actor drags the element to the drop zone and verifies the result`,

    // Simulate jQuery UI drag using window.jQuery ($ not globally assigned on demoqa)
    ExecuteScript.sync(`
      const jq = window.jQuery;
      const draggable = document.querySelector('#simpleDropContainer #draggable');
      const droppable = document.querySelector('#simpleDropContainer #droppable');

      draggable.scrollIntoView({ block: 'center' });

      const dragRect = draggable.getBoundingClientRect();
      const dropRect = droppable.getBoundingClientRect();

      const startX = dragRect.left + dragRect.width  / 2;
      const startY = dragRect.top  + dragRect.height / 2;
      const endX   = dropRect.left + dropRect.width  / 2;
      const endY   = dropRect.top  + dropRect.height / 2;

      jq(draggable).trigger(jq.Event('mousedown', { which: 1, pageX: startX, pageY: startY }));

      const steps = 15;
      for (let i = 1; i <= steps; i++) {
        const x = startX + ((endX - startX) * i / steps);
        const y = startY + ((endY - startY) * i / steps);
        jq(document).trigger(jq.Event('mousemove', { which: 1, pageX: x, pageY: y }));
      }

      jq(document).trigger(jq.Event('mouseup', { which: 1, pageX: endX, pageY: endY }));
    `),

    // Verify the drop zone text changed to "Dropped!"
    Ensure.eventually(
      Text.of(DroppablePage.dropZone),
      includes('Dropped!'),
    ),
  );
