import React from 'react';
import DraggableSourceProps from '../draggable/DraggableSource.types';
import DraggableTargetProps from '../draggable/DraggableTarget.types';
import Card from './card';
import CardProps from './card.types';
import { draggableTarget } from '../draggable/DraggableTarget.styles';
import useDropSpecs from '../draggable/useDropSpecs';
import useDragSpecs from '../draggable/useDragSpecs';

type DragAndDropProps = DraggableSourceProps & DraggableTargetProps & CardProps;

function mergeRefs<T = any>(
    refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>
): React.RefCallback<T> {
    return (value) => {
        refs.forEach((ref) => {
            if (typeof ref === 'function') {
                ref(value);
            } else if (ref != null) {
                (ref as React.MutableRefObject<T | null>).current = value;
            }
        });
    };
}
const DraggableCard: React.FC<DragAndDropProps> = ({
    dragTargetConfiguration,
    dropTargetConfiguration,
    onCollect,
    children,
    ...cardProps
}) => {
    const [collectedDragProps, useDragRef] = useDragSpecs({
        dragTargetConfiguration,
        onCollect,
    });

    const [, useDropRef] = useDropSpecs({
        dropTargetConfiguration,
        onCollect,
    });

    const { isDragging } = collectedDragProps;
    const cursor = isDragging ? `move` : `pointer`;

    const dragAndDrop = mergeRefs([useDragRef, useDropRef]);
    const draggableStyles = draggableTarget(cursor, cardProps.backgroundColor);

    return (
        <Card customCss={draggableStyles} ref={dragAndDrop} {...cardProps}>
            {children}
        </Card>
    );
};

export default DraggableCard;
