import BoardContainer from './containers/BoardContainer'
import BoardService from './services/board'

const App = () => (
  <BoardContainer board={ BoardService.fetchBoard() } />
)

export default App;
