import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Column from '../Column'

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
})

const DroppableColumn = ({ children, id, title }) => (
  <Column title={ title }>
    <Droppable droppableId={ id }>
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
        >
        { children }
        { provided.placeholder }
        </div>
      )}
    </Droppable>
  </Column>
)

export default DroppableColumn
