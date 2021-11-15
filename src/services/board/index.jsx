import { v4 as uuidv4 } from 'uuid'

const fetchBoard = () => {
  return {
    columns: [
      {
        id: uuidv4(),
        title: 'To Do',
        cards: [
          {
            id: uuidv4(),
            title: 'create postgre instance',
          },
          {
            id: uuidv4(),
            title: 'implement login interface',
          },
          {
            id: uuidv4(),
            title: 'implement login api',
          },
        ],
      },
      {
        id: uuidv4(),
        title: 'Doing',
        cards: [
          {
            id: uuidv4(),
            title: 'do the fly check-in',
          },
          {
            id: uuidv4(),
            title: 'package the stuffs',
          },
        ],
      },
      {
        id: uuidv4(),
        title: 'Done',
        cards: [
          {
            id: uuidv4(),
            title: 'covid test',
          },
          {
            id: uuidv4(),
            title: 'read books',
          },
          {
            id: uuidv4(),
            title: 'walk the dog',
          },
        ],
      },
    ]
  }
}

export default {
  fetchBoard,
}
