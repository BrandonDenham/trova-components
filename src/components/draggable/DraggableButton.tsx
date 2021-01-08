import React from 'react';
import { useDrag, DragSourceMonitor } from 'react-dnd';
import { draggableButton } from './DraggableButton styles';
import Button from '../button/button';
import Icon from '../icon/icon';
import { IconName } from '../icon/iconName';
import { Colors } from '../../shared/constants/colors';

import DraggableSourceProps from './DraggableSource.types';
import ButtonProps from '../button/button.types';

type MergeProps = DraggableSourceProps & ButtonProps;

const DraggableButton: React.FC<MergeProps> = ({
    dragTargetConfiguration,
    onCollect,
    children,
    ...buttonProps
}) => {
    const specs = {
        ...dragTargetConfiguration,
        collect: (monitor: DragSourceMonitor) => {
            onCollect(monitor);
            return {
                isDragging: monitor.isDragging(),
            };
        },
    };

    const [collectedProps, drag] = useDrag(specs);

    return (
        <div ref={drag}>
            <Button
                css={draggableButton()}
                icon={<Icon name={IconName.Plus} color={Colors.White} />}
                {...buttonProps}
            >
                {children}
            </Button>
        </div>
    );
};

export default DraggableButton;
