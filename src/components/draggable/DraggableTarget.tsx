import React from 'react';
import { draggableTarget } from './DraggableTarget.styles';
import DraggableTargetProps from './DraggableTarget.types';
import useDropSpecs from './useDropSpecs';

const DraggableTarget: React.FC<DraggableTargetProps> = ({
    dropTargetConfiguration,
    onCollect,
    children,
}) => {
    const [collectProps, drop] = useDropSpecs({
        dropTargetConfiguration,
        onCollect,
    });

    return (
        <div ref={drop} css={draggableTarget}>
            {children}
        </div>
    );
};

export default DraggableTarget;
