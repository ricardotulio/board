import React from 'react'
import styles from './styles.module.css'

const Column = ({ children, title, isBeingEdited = false, onChange }) => (
  <div className={ styles.column }>
    {!isBeingEdited ? <h4 className={ styles.title }>{ title }</h4> : <input type='text' value={ title } onChange={ onChange } />}
    <div className={ styles.cards }>
      { children } 
    </div>
  </div>
)

export default Column
