import React, { useState } from 'react'
import { prop, find, map, propEq, curry } from 'ramda'
import Board from '../../components/DragDropBoard/DragDropBoard'
import Column from '../../components/DroppableColumn'
import Card from '../../components/DraggableCard'
import CreateCardButton from '../../components/CreateCardButton'
import CreateColumnButton from '../../components/CreateColumnButton'

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

  const addCardToColumn = curry((columns, card, columnId) => map(column => {
    if (column.id == columnId)
      return {...column, cards: [...column.cards, card]}
    return column
  }))(columns)

  const handleCreateCard = (columnId) => {
    const card = {
      index: '',
      id: '',
      title: '',
      description: '',
      isBeingEdited: true,
    }

    setColumns(addCardToColumn(card, columnId))
  }

  const handleCreateColumn = () => {
    const column = {
      id: '',
      title: '',
      cards: [],
      isBeingEdited: true,
    }

    setColumns([...columns, column])
  }

  return (
    <Board onDragEnd={ handleDragEnd }>
      {columns.map(
        (column, index) => (
          <Column
            key={ column.id }
            id={ column.id }
            title={ column.title }
            isBeingEdited={ column.isBeingEdited || false }>
            {column.cards.map((card, index) => (
              <Card
                key={ card.id }
                index={ index }
                id={ card.id }
                title={ card.title }
                description={ card.description }
                isBeingEdited={ card.isBeingEdited || false }
              />
            ))}
            <CreateCardButton onClick={ () => handleCreateCard(column.id) } />
          </Column>
        )
      )}
      <CreateColumnButton onClick={ handleCreateColumn } />
    </Board>
  )
}

export default BoardContainer
