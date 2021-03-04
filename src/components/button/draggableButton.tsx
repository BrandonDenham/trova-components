import React from 'react';
import { useTheme } from '@emotion/react';

import Icon from '../icon/icon';
import { IconName } from '../icon/iconName';
import { Colors } from '../../shared/constants/colors';
import DraggableSourceProps from '../draggable/draggableSource.types';
import ButtonProps from './button.types';
import useDragSpecs from '../draggable/useDragSpecs';
import { StyledDraggableButton } from './button.styles';

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
    const theme = useTheme();
    return (
        <StyledDraggableButton
            icon={<Icon name={IconName.Plus} color={Colors.White} />}
            {...buttonProps}
            theme={theme}
            ref={drag}
        >
            {children}
        </StyledDraggableButton>
    );
};

export default DraggableButton;
