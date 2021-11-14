import { useState } from 'react'
import BoardService from './services/board'
import BoardContainer from './containers/BoardContainer'
import ColumnFormContainer from './containers/ColumnFormContainer'
import Modal from './components/Modal'

const App = () => {
  const [ board, setBoard ] = useState(BoardService.fetchBoard())
  const [ modalState, setModalState ] = useState(false) 

  console.log(board.columns)

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
    <div>
      <BoardContainer board={ board } />
      <a href='#' onClick={ showModal }>add column</a>

      <Modal active={ modalState }>
        <ColumnFormContainer handleSubmit={ addColumn } />
      </Modal>
    </div>
  )
}

export default App
