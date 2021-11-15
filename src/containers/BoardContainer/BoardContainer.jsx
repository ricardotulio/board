import React, { useState } from 'react'
import { prop, find, map, propEq, curry } from 'ramda'
import DragDropBoard from '../../components/DragDropBoard/DragDropBoard'
import DroppableColumn from '../../components/DroppableColumn'
import DraggableCard from '../../components/DraggableCard'

const BoardContainer = ({ boardService }) => {
  const board = boardService.fetchBoard()

  const [ columns, setColumns ] = useState(prop('columns', board))

  const cardIsBeingMovedBetweenColumns = result =>
    result.source.droppableId !== result.destination.droppableId
  
  const handleDragEnd = result => {
    if (cardIsBeingMovedBetweenColumns(result)) {
      // if card is being moved to a column, do something here
    }

    // if card is being reordered, do something here
  }

  return (
    <DragDropBoard columns={ columns } onDragEnd={ handleDragEnd }>
      {columns.map(
        (column, index) => (
          <DroppableColumn key={ column.id } id={ column.id } title={ column.title }>
            {column.cards.map((card, index) => (
              <DraggableCard
                key={ card.id }
                index={ index }
                id={ card.id }
                title={ card.title }
                description={ card.description }
              />
            ))}
          </DroppableColumn>
        )
      )}
    </DragDropBoard>
  )
}

export default BoardContainer
