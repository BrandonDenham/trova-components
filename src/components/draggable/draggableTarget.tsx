/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { draggableTarget } from './draggableTarget.styles';
import DraggableTargetProps from './draggableTarget.types';
import useDropSpecs from './useDropSpecs';

const DraggableTarget: React.FC<DraggableTargetProps> = ({
    dropTargetConfiguration,
    onCollect,
    children,
}) => {
    const [, drop] = useDropSpecs({
        dropTargetConfiguration,
        onCollect,
    });

    return (
        <div css={draggableTarget()} ref={drop}>
            <div>{children}</div>
        </div>
    );
};

export default DraggableTarget;