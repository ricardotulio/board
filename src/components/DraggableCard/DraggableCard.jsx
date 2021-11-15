import React from 'react'
import Card from '../../components/Card'
import { Draggable } from 'react-beautiful-dnd'

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: 0,
  margin: `0 0 0px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
})

const DraggableCard = ({ id, index, title, description }) => (
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
        <Card key={ index } title={ title } description={ description } />
      </div>
    )}
  </Draggable>
)

export default DraggableCard