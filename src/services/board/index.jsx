const fetchBoard = () => {
  return {
    columns: [
      {
        id: '#01',
        title: 'To Do',
        cards: [
          {
            id: '#01',
            title: 'create postgre instance',
          },
          {
            id: '#02',
            title: 'implement login interface',
          },
          {
            id: '#03',
            title: 'implement login api',
          },
        ],
      },
      {
        id: '#02',
        title: 'Doing',
        cards: [
          {
            id: '#04',
            title: 'do the fly check-in',
          },
          {
            id: '#05',
            title: 'package the stuffs',
          },
        ],
      },
      {
        id: '#03',
        title: 'Done',
        cards: [
          {
            id: '#06',
            title: 'covid test',
          },
          {
            id: '#07',
            title: 'read books',
          },
          {
            id: '#08',
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
