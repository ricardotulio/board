import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { pipe, prop, append, find, map, propEq, __ } from 'ramda'
import Board from '../../components/Board'
import Column from '../../components/Column'
import Card from '../../components/Card'

const grid = 0;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
})

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
})

const BoardContainer = ({ boardService }) => {
  const board = boardService.fetchBoard()

  const [ columns, setColumns ] = useState(prop('columns', board))

  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }

    const { source, destination } = result

    if (source.droppableId === destination.droppableId ) {
      const column = find(propEq('id', source.droppableId), columns)
      const cards = [...column.cards]
      const [removed] = cards.splice(source.index, 1)
      cards.splice(destination.index, 0, removed)

      setColumns(map(column => {
        if (column.id == source.droppableId)
          return {...column, cards: cards}
        return column
      }, columns))
    } else {
      const sourceColumn = find(propEq('id', source.droppableId), columns)
      const destColumn = find(propEq('id', destination.droppableId), columns)

      const sourceItems = [...sourceColumn.cards]
      const destItems = [...destColumn.cards]

      const [removed] = sourceItems.splice(source.index, 1)
      destItems.splice(destination.index, 0, removed)

      setColumns(map(column => {
        if (column.id == source.droppableId)
          return { ...column, cards: sourceItems }

        if (column.id == destination.droppableId)
          return { ...column, cards: destItems }
        
        return column
      }, columns))
    }
  }

  return (
    <Board>
      <DragDropContext onDragEnd={ onDragEnd }>
        {columns.map(
          (column, index) => (
            <Column key={ index } title={ column.title } >
              <Droppable droppableId={ column.id }>
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                  >
                    {column.cards.map((card, index) => (
                      <Draggable key={ card.id } draggableId={ card.id } index={ index }>
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
                            <Card key={ index } title={ card.title } description={ card.description } />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </Column>
          )
        )}
      </DragDropContext>
    </Board>
  )
}

export default BoardContainer
