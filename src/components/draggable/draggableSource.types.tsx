import { DragSourceMonitor } from 'react-dnd';

export default interface DraggableSourceProps {
    dragTargetConfiguration: {
        item: { type: string };
        begin?: (monitor: DragSourceMonitor) => void;
    };
    onCollect: (monitor: DragSourceMonitor) => void;
}
