import React from 'react';
import DraggableCard from './DraggableCard';
import DraggableContainer from './DraggableContainer';
import DraggableButton from './DraggableButton';
import DraggableTarget from './DraggableTarget';
import { ButtonType } from '../button';
import { Colors } from '../../shared/constants/colors';
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

export const Card = () => (
    <DraggableContainer>
        <DraggableCard
            dropTargetConfiguration={{ accept: `string`, drop: (item) => item }}
            dragTargetConfiguration={{
                item: { type: `string` },
            }}
            onCollect={(item) => item}
            backgroundColor={Colors.Gray}
        >
            <React.Fragment>
                <P>Drag me</P>
            </React.Fragment>
        </DraggableCard>
    </DraggableContainer>
);

export const DragButton = () => (
    <DraggableContainer>
        <DraggableButton
            dragTargetConfiguration={{ item: { type: `string` } }}
            onCollect={(item) => item}
            buttonType={ButtonType.Secondary}
        >
            Transfer
        </DraggableButton>
    </DraggableContainer>
);
