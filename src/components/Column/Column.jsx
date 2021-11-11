import React from 'react'
import styles from './styles.module.css'

const Column = ({ children, title }) => (
  <div className={ styles.column }>
    <h2 className={ styles.columnTitle }>{ title }</h2>
    <div className={ styles.cards }>
      { children } 
    </div>
    <div className={ styles.columnActions }>
      <a href='#'>add card</a>
    </div>
  </div>
)

export default Column
