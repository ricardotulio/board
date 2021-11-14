import React, { useState } from 'react'
import Board from '../../components/Board'
import ColumnContainer from '../ColumnContainer'

const BoardContainer = ({ board }) => (
  <Board>
    {board.columns.map(
      (column, index) => (
        <ColumnContainer column={ column } />
      )
    )}
  </Board>
)

export default BoardContainer
