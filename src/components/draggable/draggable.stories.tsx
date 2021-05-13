import React from 'react';
import DraggableContainer from './draggableContainer';
import DraggableTarget from './draggableTarget';
import P from '../typography/p';
import { DraggableCard } from '../card/index';
import { Colors } from '../../shared/constants/colors';

export default {
    title: 'Draggable',
    component: DraggableContainer,
};

export const Target = () => (
    <DraggableContainer>
        <DraggableTarget
            dropTargetConfiguration={{ accept: `string`, drop: item => item }}
            onCollect={item => item}
        >
            <P isBold={false}>drop here</P>
        </DraggableTarget>
        <DraggableCard
            dropTargetConfiguration={{
                accept: `string`,
                drop: item => item,
            }}
            dragTargetConfiguration={{
                item: {
                    type: `string`,
                },
            }}
            onCollect={item => item}
            backgroundColor={Colors.White}
        >
            <P isBold={false}>Draggable Card</P>
        </DraggableCard>
    </DraggableContainer>
);
