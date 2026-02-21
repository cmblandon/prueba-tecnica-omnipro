import { Task } from '@serenity-js/core';
import { Scroll, Text } from '@serenity-js/web';
import { Ensure, includes } from '@serenity-js/assertions';
import { DroppablePage } from '../../pages/DroppablePage';
import { DragAndDrop } from '../../interactions/DragAndDrop'; // Usar la nueva interacción

export const DragAndVerifyDrop = () =>
  Task.where(
    `#actor drags the element to the drop zone and verifies the result`,
    Scroll.to(DroppablePage.draggable), // Garantiza visibilidad para coordenadas correctas
    DragAndDrop.from(DroppablePage.draggable).to(DroppablePage.dropZone),
    Ensure.eventually(
      Text.of(DroppablePage.dropZone),
      includes('Dropped!'), // Verificación requerida por el Feature [cite: 1]
    ),
  );
  