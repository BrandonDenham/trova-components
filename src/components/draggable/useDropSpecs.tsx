import { useMemo } from 'react';
import { DropTargetMonitor, useDrop } from 'react-dnd';
import DraggableTargetProps from './DraggableTarget.types';

const useDropSpecs = (targetProps: DraggableTargetProps) => {
    const { dropTargetConfiguration, onCollect } = targetProps;

    const specs = useMemo(
        () => ({
            ...dropTargetConfiguration,
            collect: (monitor: DropTargetMonitor) => {
                onCollect(monitor);
                return {
                    isOver: monitor.isOver(),
                    canDrop: monitor.canDrop(),
                };
            },
        }),
        [dropTargetConfiguration, onCollect]
    );

    return useDrop(specs);
};

export default useDropSpecs;
