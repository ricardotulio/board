import React from 'react'
import styles from './styles.module.css'

const CardForm = ({ onChange, onSubmit }) => (
  <form onSubmit={ onSubmit }>
    <label className={ styles.input }>
      Title: 
      <input name='title' type='text' onChange={ onChange } />
    </label>
    <button type='submit'>Submit</button>
  </form>
)

export default CardForm
