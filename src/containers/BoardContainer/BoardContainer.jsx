import React, { useState } from 'react'
import { pipe, prop, append, __ } from 'ramda'
import Board from '../../components/Board'
import Modal from '../../components/Modal'
import ColumnContainer from '../ColumnContainer'
import ColumnFormContainer from '../ColumnFormContainer'

const BoardContainer = ({ boardService }) => {
  const board = boardService.fetchBoard()

  const [ columns, setColumns ] = useState(prop('columns', board))
  const [ modalState, setModalState ] = useState(false)

  const showModal = () => setModalState(true)
  const hideModal = () => setModalState(false)
  
  const addColumn = pipe(
    append(__, columns),
    setColumns,
    hideModal,
  )

  return (
    <Board>
      {columns.map(
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
