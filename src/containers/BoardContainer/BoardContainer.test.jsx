import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import BoardContainer from './BoardContainer'
import Column from '../../components/Column'
import Card from '../../components/Card'
import Modal from '../../components/Modal'

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

it('should render a board with empty columns', () => {
   const board = {
    columns: [
      {
        title: 'To Do',
        cards: [],
      },
      {
        title: 'Doing',
        cards: [],
      },
      {
        title: 'Done',
        cards: [],
      },
    ],
  }
  const boardContainer = shallow(<BoardContainer board={ board } />)

  expect(boardContainer.find(Column)).toHaveLength(board.columns.length) 
})

it('should render a board with columns and cards', () => {
   const board = {
    columns: [
      {
        title: 'To Do',
        cards: [
          {
            id: '#2',
            title: 'card title',
          },
          {
            id: '#2',
            title: 'card title',
          },
        ],
      },
      {
        title: 'Doing',
        cards: [
          {
            id: '#2',
            title: 'card title',
          },
          {
            id: '#2',
            title: 'card title',
          },
          {
            id: '#2',
            title: 'card title',
          },
          {
            id: '#2',
            title: 'card title',
          },
        ],
      },
      {
        title: 'Done',
        cards: [],
      },
    ],
  }
  const boardContainer = shallow(<BoardContainer board={ board } />)

  expect(boardContainer.find(Column).at(0).find(Card)).toHaveLength(2) 
  expect(boardContainer.find(Column).at(1).find(Card)).toHaveLength(4) 
  expect(boardContainer.find(Column).at(2).find(Card)).toHaveLength(0) 
})

it('should show column form when click on add column', () => {
  const board = {
    columns: [],
  }

  const boardContainer = mount(<BoardContainer board={ board } />)
  boardContainer.find('a').simulate('click')
  expect(boardContainer.state('isModalActive')).toBe(true)
})
