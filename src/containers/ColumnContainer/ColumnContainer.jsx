import React, { useState } from 'react'
import Column from '../../components/Column'
import Card from '../../components/Card'
import Modal from '../../components/Modal'
import CardFormContainer from '../CardFormContainer'

const ColumnContainer = ({ column }) => {
  const [ cards, setCards ] = useState(column.cards)
  const [ isModalActive, setModalState ] = useState(false)

  const showModal = () => setModalState(true)
  const hideModal = () => setModalState(false)

  const addCard = (card) => {
    setCards([...cards, card])
    hideModal()
  }

  return (
    <div>
      <Column title={ column.title }>
        {cards.map(card => <Card key={ card.id } card={ card } />)}

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
