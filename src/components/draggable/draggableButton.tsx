import React from 'react';
import { useDrag, DragSourceMonitor } from 'react-dnd';

import Button from '../button/button';
import { ButtonType } from '../button/buttonType';

const style: React.CSSProperties = {
	backgroundColor: 'white',
	padding: '0.5rem 1rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	cursor: 'move',
	float: 'left',
}
export interface DraggableCardProps {
	name: string,
	children: string,
}

const DraggableButton: React.FC<DraggableCardProps> = ({ name, children }) => {
	const item = { name, type: `string` };
	const [{opacity}, drag] = useDrag({
		item, 
		end: (item: { name: string } | undefined, monitor: DragSourceMonitor) => {
			const dropResult = monitor.getDropResult()
			if (item && dropResult) {
				alert(`You dropped ${item.name} into ${dropResult.name}!`)
			}
		}
		,collect: (monitor: any) => ({
			opacity: monitor.isDragging() ? 0.4 : 1,
		})
	});
	return (
			<div ref={drag} style={{ ...style, opacity }}>
				<Button buttonType={ButtonType.Primary}>{children}</Button>
			</div>);
}

export default DraggableButton;