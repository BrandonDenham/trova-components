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
    className,
}) => {
    const [{ isOver, canDrop }, drop] = useDropSpecs({
        dropTargetConfiguration,
        onCollect,
    });

    const actualCss = draggableTarget(
        undefined,
        undefined,
        undefined,
        undefined,
        isOver,
        canDrop
    );
    return (
        <div css={actualCss} ref={drop} className={className}>
            {children}
        </div>
    );
};

export default DraggableTarget;
