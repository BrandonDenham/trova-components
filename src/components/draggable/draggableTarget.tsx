import React from 'react';
import { useDrop } from 'react-dnd';
import { draggableTarget } from './draggableTarget.styles';
import DraggableTargetProps from './draggableTarget.types';

const DraggableTarget: React.FC<DraggableTargetProps> = ({
    dropTargetConfiguration,
    onCollect,
}) => {
    const specs = {
        ...dropTargetConfiguration,
        collect: (monitor: { isOver: () => any; canDrop: () => any }) => {
            onCollect({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            });
            return {
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            };
        },
    };
    const [collectProps, drop] = useDrop(specs);

    return (
        <div ref={drop} css={draggableTarget}>
            <p>Drop here.</p>
        </div>
    );
};

export default DraggableTarget;
