import { DragSourceMonitor } from 'react-dnd';

export default interface DraggableSourceProps {
    dragTargetConfiguration: {
        item: { type: string };
    };
    onCollect: (monitor: DragSourceMonitor) => void;
    buttonText: string;
}
