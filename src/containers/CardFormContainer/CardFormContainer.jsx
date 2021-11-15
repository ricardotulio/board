import React, { useState } from 'react'
import CardForm from '../../components/CardForm'

const CardFormContainer = ({ handleSubmit }) => {
  const [ card, setCard ] = useState({ title: '' })

  const handleChange = event => {
    setCard({ title: event.target.value })
  }

  const _handleSubmit = event => {
    event.preventDefault()
    handleSubmit(card)
    setCard({ title: '' })
  }

  return (
    <CardForm card={ card } onChange={ handleChange } onSubmit={ _handleSubmit } />
  )
}

export default CardFormContainer
