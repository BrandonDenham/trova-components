import React from 'react'
import { useDrop } from 'react-dnd'
import { Colors } from '../../shared/constants/colors';
//import { DragItem } from './interfaces'
import { ItemTypes } from './ItemTypes';

const style: React.CSSProperties = {
  border: '1px solid gray',
  height: '15rem',
  width: '15rem',
  padding: '2rem',
  textAlign: 'center',
}

export interface TargetBoxProps {
}

const DraggableTarget: React.FC <TargetBoxProps> = () => {
  const [{ isOver, draggingColor, canDrop }, drop] = useDrop({
    accept: [Colors.DarkGray, Colors.DarkPrimary],
    drop(item: ItemTypes) {
      return undefined
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      draggingColor: monitor.getItemType() as string,
    }),
  })

  const opacity = isOver ? 1 : 0.7
  let backgroundColor = '#fff'
  switch (draggingColor) {
    case Colors.Danger:
      backgroundColor = 'lightblue'
      break
    case Colors.LightGray:
      backgroundColor = 'lightgoldenrodyellow'
      break
    default:
      break
  }

  return (
    <div ref={drop} style={{ ...style, backgroundColor, opacity }}>
      <p>Drop here.</p>
    </div>
  )
}

export default DraggableTarget;
