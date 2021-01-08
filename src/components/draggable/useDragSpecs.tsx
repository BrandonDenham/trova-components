import { useMemo } from 'react';
import { DragSourceMonitor, useDrag } from 'react-dnd';
import DraggableSourceProps from './DraggableSource.types';

const useDragSpecs = (sourceProps: DraggableSourceProps) => {
    const { dragTargetConfiguration, onCollect } = sourceProps;

    const specs = useMemo(
        () => ({
            ...dragTargetConfiguration,
            collect: (monitor: DragSourceMonitor) => {
                onCollect(monitor);
                return {
                    isDragging: monitor.isDragging(),
                };
            },
        }),
        [dragTargetConfiguration, onCollect]
    );

    return useDrag(specs);
};

export default useDragSpecs;
