import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import BoardContainer from './BoardContainer'
import Column from '../../components/Column'

Enzyme.configure({ adapter: new Adapter() })

it('should render an empty board', () => {
  const board = {
    columns: [],
  }
  const boardContainer = shallow(<BoardContainer board={ board } />)

  expect(boardContainer.contains(<Column />)).toBeFalsy()
})

it('should render an empty board when columns is undefined', () => {
  const board = {}
  const boardContainer = shallow(<BoardContainer board={ board } />)

  expect(boardContainer.contains(<Column />)).toBeFalsy()
})

it('should render a board with columns', () => {
   const board = {
    columns: [
      {
        title: 'To Do',
      },
      {
        title: 'Doing',
      },
      {
        title: 'Done',
      },
    ],
  }
  const boardContainer = shallow(<BoardContainer board={ board } />)

  expect(boardContainer.find(Column)).toHaveLength(board.columns.length) 
})
