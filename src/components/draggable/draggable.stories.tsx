import React from 'react';
import DraggableContainer from './draggableContainer';
import DraggableTarget from './draggableTarget';
import P from '../typography/p';

export default {
    title: 'Draggable',
    component: DraggableContainer,
};

export const Target = () => (
    <DraggableContainer>
        <DraggableTarget
            dropTargetConfiguration={{ accept: `string`, drop: (item) => item }}
            onCollect={(item) => item}
        >
            <P>drop here</P>
        </DraggableTarget>
    </DraggableContainer>
);
