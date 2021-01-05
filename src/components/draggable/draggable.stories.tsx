import React from 'react';

import DraggableCard from './draggableCard';
import DraggableContainer from './draggableContainer';
import DraggableButton from './draggableButton';
import DraggableTarget from './draggableTarget';

export default {
    title: 'Draggable',
    component: DraggableContainer,
};

export const Target = () => (<DraggableContainer><DraggableTarget/></DraggableContainer>);

export const Card = () => (<DraggableContainer><DraggableCard/></DraggableContainer>);

export const Button = () => (<DraggableContainer><DraggableButton name="content 1">content 1</DraggableButton></DraggableContainer>);
