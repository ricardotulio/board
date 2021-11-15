import React from 'react'
import styles from './styles.module.css'

const CardForm = ({ card, onChange, onSubmit }) => (
  <form onSubmit={ onSubmit }>
    <label className={ styles.input }>
      Title: 
      <input name='title' type='text' value={ card.title } onChange={ onChange } />
    </label>
    <button type='submit'>Submit</button>
  </form>
)

export default CardForm
