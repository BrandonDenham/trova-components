import React from 'react';
import DraggableCard from './DraggableCard';
import DraggableContainer from './DraggableContainer';
import DraggableButton from './DraggableButton';
import DraggableTarget from './DraggableTarget';

export default {
    title: 'Draggable',
    component: DraggableContainer,
};

export const Target = () => (
    <DraggableContainer>
        <DraggableTarget
            dropTargetConfiguration={{ accept: `string`, drop: (item) => item }}
            onCollect={(item) => item}
        />
    </DraggableContainer>
);

export const Card = () => (
    <DraggableContainer>
        <DraggableCard
            dropTargetConfiguration={{ accept: `string`, drop: (item) => item }}
            dragTargetConfiguration={{ item: { type: `string` } }}
            onCollect={(item) => item}
        />
    </DraggableContainer>
);

export const DragButton = () => (
    <DraggableContainer>
        <DraggableButton
            dragTargetConfiguration={{ item: { type: `string` } }}
            onCollect={(item) => item}
            buttonText="Transfer"
        ></DraggableButton>
    </DraggableContainer>
);
