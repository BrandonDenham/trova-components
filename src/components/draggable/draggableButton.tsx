import React from 'react';
import { useDrag, DragSourceMonitor } from 'react-dnd';
import { draggableButton } from './draggableButton styles';
import Button from '../button/button';
import { ButtonType } from '../button/buttonType';
import Icon from '../icon/icon';
import { IconName } from '../icon/iconName';
import { Colors } from '../../shared/constants/colors';

import DraggableSourceProps from './draggableSource.types';

const DraggableButton: React.FC<DraggableSourceProps> = ({
    dragTargetConfiguration,
    onCollect,
    buttonText,
}) => {
    const specs = {
        ...dragTargetConfiguration,
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: monitor.isDragging(),
        }),
    };

    const [collectedProps, drag] = useDrag(specs);

    return (
        <div ref={drag} css={draggableButton()}>
            <Button icon={<Icon name={IconName.Plus} color={Colors.White} />}>
                {buttonText}
            </Button>
        </div>
    );
};

export default DraggableButton;
