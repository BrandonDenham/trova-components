import { SyntheticEvent } from 'react';

export default interface DraggableTargetProps {
    dragTargetConfiguration: (
        event: SyntheticEvent,
        name: string,
        value: string
    ) => void;
    onCollect: (
        event: SyntheticEvent,
        name: string,
        value: string
    ) => void;
}
