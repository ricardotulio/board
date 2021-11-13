import React from 'react'
import styles from './styles.module.css'

const CardForm = () => (
  <form>
    <label className={ styles.input }>
      Title: 
      <input name="title" type="text" />
    </label>
    <label className={ styles.input }>
      Description:
      <textarea name="description" />
    </label>
    <input type="submit" value="Submit" />
  </form>
)

export default CardForm
