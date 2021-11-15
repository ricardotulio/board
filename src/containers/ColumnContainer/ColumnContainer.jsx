import React, { useState } from 'react'
import { append, pipe, __ } from 'ramda'
import Column from '../../components/Column'
import Modal from '../../components/Modal'
import CardFormContainer from '../CardFormContainer'
import CardContainer from '../CardContainer/CardContainer'

const ColumnContainer = ({ column }) => {
  const [ cards, setCards ] = useState(column.cards)
  const [ isModalActive, setModalState ] = useState(false)

  const showModal = () => setModalState(true)
  const hideModal = () => setModalState(false)

  const addCard = pipe(
    append(__, cards),
    setCards,
    hideModal,
  )

  return (
    <div>
      <Column title={ column.title }>
        {cards.map(card => <CardContainer key={ card.id } card={ card } />)}

        <div>
          <a onClick={ showModal } href='#'>add card</a>
        </div>
      </Column>

      <Modal active={ isModalActive }>
        <CardFormContainer handleSubmit={ addCard } />
      </Modal>
    </div>
  )
}

export default ColumnContainer
