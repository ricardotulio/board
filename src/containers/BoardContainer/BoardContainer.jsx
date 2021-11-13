import React from 'react'
import Board from '../../components/Board'
import Column from '../../components/Column'

class BoardContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = { columns: props.board.columns || [] }
  }

  render() {
    return (
      <Board>
        {this.state.columns.map((column, index) =>
          <Column key={ index } column={ column } />)}
      </Board>
    )
  }
}

export default BoardContainer
