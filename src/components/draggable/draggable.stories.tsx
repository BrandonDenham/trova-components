import React from 'react';
import DraggableCard from './draggableCard';
import DraggableContainer from './draggableContainer';
import DraggableButton from './draggableButton';
import DraggableTarget from './draggableTarget';

export default {
    title: 'Draggable',
    component: DraggableContainer,
};

export const Target = () => (
    <DraggableContainer>
        <DraggableTarget 
            dropTargetConfiguration={{accept: `string`, drop: (item) => item}} 
            onCollect={(item) => item}
            />
    </DraggableContainer>
);

export const Card = () => (
    <DraggableContainer>
        <DraggableCard 
            dropTargetConfiguration={{accept: `string`, drop: (item) => item}} 
            dragTargetConfiguration={{item:{ type: `string`}}}
            onCollect={(item) => item}
        />
    </DraggableContainer>
);

export const DragButton = () => (
    <DraggableContainer>
        <DraggableButton  
            dragTargetConfiguration={{item:{ type: `string`}}}
            onCollect={(item) => item}
            buttonText="Transfer">
            </DraggableButton>
    </DraggableContainer>
);
