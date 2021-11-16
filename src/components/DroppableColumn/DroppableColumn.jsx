import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Column from '../Column'

const getListStyle = isDraggingOver => ({})

const DroppableColumn = (props) => {
  const { id, children } = props
  
  return ( 
    <Droppable droppableId={ id }>
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
        >
        <Column {...props}>{ children }</Column>
        { provided.placeholder }
        </div>
      )}
    </Droppable>
  )
}

export default DroppableColumn
