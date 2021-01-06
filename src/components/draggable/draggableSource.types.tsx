import { SyntheticEvent } from 'react';
import { ItemTypes } from './ItemTypes';

export default interface DraggableSourceProps {
    dragTargetConfiguration: {
        item: { type: string },
    }
    onCollect: (monitor: any) => void,
}
