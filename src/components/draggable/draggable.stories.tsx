import React from 'react';
import Button from '../button/button';
import DraggableCard from './draggableCard';
import DraggableContainer from './draggableContainer';
import DraggableButton from './draggableButton';
import DraggableTarget from './draggableTarget';
import { ButtonType } from '../button/buttonType';
import Icon from '../icon/icon';
import { IconName } from '../icon/iconName';
import { Colors } from '../../shared/constants/colors';

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
            onCollect={(item) => item}>
                <Button 
                    buttonType={ButtonType.Primary} 
                    icon={<Icon name={IconName.Plus} color={Colors.White} />}>
                    Transfer
                </Button>
            </DraggableButton>
    </DraggableContainer>
);
