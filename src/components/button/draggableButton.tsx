/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import Icon from '../icon/icon';
import { IconName } from '../icon/iconName';
import { Colors } from '../../shared/constants/colors';
import DraggableSourceProps from '../draggable/draggableSource.types';
import Button from './button';
import ButtonProps from './button.types';
import useDragSpecs from '../draggable/useDragSpecs';
import { draggableButtonStyle } from './button.components';

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
            draggable={true}
            ref={drag}
            css={draggableButtonStyle()}
        >
            {children}
        </Button>
    );
};

export default DraggableButton;
