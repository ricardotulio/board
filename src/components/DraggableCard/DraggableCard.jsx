import React from 'react'
import Card from '../../components/Card'
import { Draggable } from 'react-beautiful-dnd'

const getItemStyle = (isDragging, draggableStyle) => ({
  // styles we need to apply on draggables
  ...draggableStyle
})

const DraggableCard = (props) => {
  const { id, index } = props

  return (
    <Draggable key={ id } index={ index } draggableId={ id } index={ index }>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          <Card { ...props } />
        </div>
      )}
    </Draggable>
  )
}

export default DraggableCard