import React, { ReactNode } from 'react';
import { DndProvider } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';

function DraggableContainer(children: ReactNode) {
    return <DndProvider options={HTML5toTouch}>{children}</DndProvider>;
}

export default DraggableContainer;
