import React, { useMemo } from 'react';
import { useDrag, DragSourceMonitor } from 'react-dnd';

import { Colors } from '../../shared/constants/colors';
  export interface SourceBoxProps {
	color?: string
	onToggleForbidDrag?: () => void
  }

  const style: React.CSSProperties = {
	border: '1px dashed gray',
	padding: '0.5rem',
	margin: '0.5rem',
  }
const DraggableCard: React.FC<SourceBoxProps> = ({ color, children }) => {
	const [{ isDragging }, drag] = useDrag({
	  item: { type: `${color}` },
	  collect: (monitor: DragSourceMonitor) => ({
		isDragging: monitor.isDragging(),
	  }),
	})
  

	const backgroundColor = useMemo(() => {
	  switch (color) {
		case Colors.Danger:
		  return 'lightgoldenrodyellow'
		case Colors.DarkGray:
		  return 'lightblue'
		default:
		  return 'lightgoldenrodyellow'
	  }
	}, [color])
  
	const containerStyle = useMemo(
	  () => ({
		...style,
		backgroundColor,
		opacity: isDragging ? 0.4 : 1,
	  }),
	  [isDragging, backgroundColor],
	)
  
	return (
		
			<div ref={drag} style={containerStyle}>
				drag me
			</div>
		
	)
}

export default DraggableCard;
