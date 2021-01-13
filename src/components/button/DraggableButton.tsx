import React from 'react';
import Button from '../button/button';
import Icon from '../icon/icon';
import { IconName } from '../icon/iconName';
import { Colors } from '../../shared/constants/colors';

import DraggableSourceProps from '../draggable//DraggableSource.types';
import ButtonProps from '../button/button.types';
import useDragSpecs from '../draggable/useDragSpecs';

type MergeProps = DraggableSourceProps & ButtonProps;

const DraggableButton: React.FC<MergeProps> = ({
    dragTargetConfiguration,
    onCollect,
    children,
    ...buttonProps
}) => {
    const [, drag] = useDragSpecs({
        dragTargetConfiguration,
        onCollect,
    });

    return (
        <Button
            icon={<Icon name={IconName.Plus} color={Colors.White} />}
            {...buttonProps}
            ref={drag}
        >
            {children}
        </Button>
    );
};

export default DraggableButton;
