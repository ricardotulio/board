import React from 'react'
import Board from '../../components/Board'
import Column from '../../components/Column'
import Card from '../../components/Card'

class BoardContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = { columns: props.board.columns || [] }
  }

  render() {
    return (
      <Board>
        {this.state.columns.map(
          (column, index) => (
            <Column key={ index } column={ column }>
              {column.cards.map(card => <Card key={ card.id } card={ card } />)}
            </Column>
          )
        )}
      </Board>
    )
  }
}

export default BoardContainer
