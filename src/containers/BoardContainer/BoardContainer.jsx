import React, { useState } from 'react'
import Board from '../../components/Board'
import Modal from '../../components/Modal'
import ColumnContainer from '../ColumnContainer'
import ColumnFormContainer from '../ColumnFormContainer'

const BoardContainer = ({ boardService }) => {
  const [ board, setBoard ] = useState(boardService.fetchBoard())
  const [ modalState, setModalState ] = useState(false) 
  
  const showModal = () => setModalState(true)
  const hideModal = () => setModalState(false)
  
  const addColumn = column => {
    const { columns } = board
  
    setBoard({
      columns: [ ...columns, column ],
    })
  
    hideModal()
  }

  return (
    <Board>
      {board.columns.map(
        (column, index) => (
          <ColumnContainer column={ column } />
        )
      )}

      <a href='#' onClick={ showModal }>add column</a>

      <Modal active={ modalState }>
        <ColumnFormContainer handleSubmit={ addColumn } />
      </Modal>
    </Board>
  )
}

export default BoardContainer
