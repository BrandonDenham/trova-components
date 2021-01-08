import React from 'react';
import { useDrag, DragSourceMonitor, useDrop } from 'react-dnd';
import DraggableSourceProps from './DraggableSource.types';
import DraggableTargetProps from './DraggableTarget.types';
import Card from '../card/card';
import { Colors } from '../../shared/constants/colors';
import CardProps from '../card/card.types';

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
    const dragSpecs = {
        ...dragTargetConfiguration,
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: monitor.isDragging(),
        }),
    };
    const [collectedDragProps, drag] = useDrag(dragSpecs);

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
    const [collectedDropProps, drop] = useDrop(dropSpecs);

    const { isDragging } = collectedDragProps;
    const cursor = isDragging ? `move` : `pointer`;

    const dragAndDrop = mergeRefs([drag, drop]);

    return (
        <div ref={dragAndDrop}>
            <Card backgroundColor={Colors.LightGray} {...cardProps}>
                {children}
            </Card>
        </div>
    );
};

export default DraggableCard;
