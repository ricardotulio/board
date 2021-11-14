import React, { useState } from 'react'
import ColumnForm from '../../components/ColumnForm'

const ColumnFormContainer = ({ handleSubmit }) => {
  const [ column, setColumn ] = useState({ title: '', cards: [] })

  const _handleSubmit = (event) => {
    event.preventDefault()
    handleSubmit(column)
    setColumn({ title: '', cards: [] })
  }

  return (
    <ColumnForm
      column={ column }
      onChange={ (event) => setColumn({ ...column, title: event.target.value }) }
      onSubmit={ _handleSubmit } />
  )
}

export default ColumnFormContainer
