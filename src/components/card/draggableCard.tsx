import React from 'react';
import DraggableSourceProps from '../draggable/draggableSource.types';
import DraggableTargetProps from '../draggable/draggableTarget.types';
import Card from './card';
import CardProps from './card.types';
import useDropSpecs from '../draggable/useDropSpecs';
import useDragSpecs from '../draggable/useDragSpecs';
import { draggableCardStyle } from './draggableCard.styles';

type DragAndDropProps = DraggableSourceProps & DraggableTargetProps & CardProps;

function mergeRefs<T = any>(
    refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>
): React.RefCallback<T> {
    return value => {
        refs.forEach(ref => {
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
    
    const [{ isDragging }, useDragRef] = useDragSpecs({
        dragTargetConfiguration,
        onCollect,
    });

    const [, useDropRef] = useDropSpecs({
        dropTargetConfiguration,
        onCollect,
    });

    const dragAndDrop = mergeRefs([useDragRef, useDropRef]);
    const draggableStyles = draggableCardStyle(
        isDragging,
        cardProps.backgroundColor
    );

    return (
        <Card customCss={draggableStyles} ref={dragAndDrop} {...cardProps}>
            {children}
        </Card>
    );
};

export default DraggableCard;
