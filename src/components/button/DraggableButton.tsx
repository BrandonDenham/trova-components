import React from 'react';
import { draggableButton } from '../draggable/DraggableButton styles';
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
    const [collectedProps, drag] = useDragSpecs({
        dragTargetConfiguration,
        onCollect,
    });

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
