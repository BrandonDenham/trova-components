import React from 'react';
import { useDrag, DragSourceMonitor } from 'react-dnd';
import { draggableButton } from './draggableButton styles';

import DraggableSourceProps from './draggableSource.types';

const DraggableButton: React.FC<DraggableSourceProps> = ({ dragTargetConfiguration, onCollect, children }) => {
	
	const specs = {
		...dragTargetConfiguration, 
		collect: (monitor: DragSourceMonitor) => ({
			isDragging: monitor.isDragging(),
		})};

	const [collectedProps, drag] = useDrag(specs);
	
	return (
		<div ref={drag} css={draggableButton()}>
			{children}
		</div>
	);
}

export default DraggableButton;