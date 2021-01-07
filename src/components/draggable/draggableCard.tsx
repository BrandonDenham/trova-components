import React from 'react';
import { useDrag, DragSourceMonitor, useDrop } from 'react-dnd';
import DraggableSourceProps from './draggableSource.types';
import DraggableTargetProps from './draggableTarget.types';
import { draggableTarget } from './draggableTarget.styles';
import { draggableButton } from './draggableButton styles';

type DragAndDropProps = DraggableSourceProps & DraggableTargetProps;

const DraggableCard: React.FC<DragAndDropProps> = ({
    dragTargetConfiguration,
    dropTargetConfiguration,
    onCollect,
}) => {
    const dragSpecs = {
        ...dragTargetConfiguration,
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: monitor.isDragging(),
        }),
    };

    const dropSpecs = {
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
    const [collectedDragProps, drag] = useDrag(dragSpecs);
    const [collectedDropProps, drop] = useDrop(dropSpecs);

    const { isDragging } = collectedDragProps;

    const cursor = isDragging ? `move` : `pointer`;

    return (
        <div ref={drag} css={draggableTarget(cursor)}>
            <div ref={drop} css={draggableButton()}>
                <p>Drop here</p>
            </div>
            drag me
        </div>
    );
};

export default DraggableCard;
