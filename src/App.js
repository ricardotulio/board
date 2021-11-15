import { useState } from 'react'
import BoardService from './services/board'
import BoardContainer from './containers/BoardContainer'

const App = () => (
  <BoardContainer boardService={ BoardService } />
)

export default App
