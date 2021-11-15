import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import Board from '../Board'

const cardHasBeenDropped = result => result.destination

const DragDropBoard = ({ children, onDragEnd }) => (
  <DragDropContext onDragEnd={ result => cardHasBeenDropped(result) && onDragEnd(result) }>
    <Board>{ children }</Board>
  </DragDropContext>
)

export default DragDropBoard
