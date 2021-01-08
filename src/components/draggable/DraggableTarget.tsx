import React from 'react';
import { DropTargetMonitor, useDrop } from 'react-dnd';
import { draggableTarget } from './DraggableTarget.styles';
import DraggableTargetProps from './DraggableTarget.types';
import P from '../typography/p';

const DraggableTarget: React.FC<DraggableTargetProps> = ({
    dropTargetConfiguration,
    onCollect,
    children,
}) => {
    const specs = {
        ...dropTargetConfiguration,
        collect: (monitor: DropTargetMonitor) => {
            onCollect(monitor);
            return {
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            };
        },
    };
    const [collectProps, drop] = useDrop(specs);

    return (
        <div ref={drop} css={draggableTarget}>
            {children}
        </div>
    );
};

export default DraggableTarget;
