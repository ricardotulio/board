import React from 'react'
import styles from './styles.module.css'

const Column = ({ children, title }) => (
  <div className={ styles.column }>
    <h1>{ title }</h1>
    <div className={ styles.cards }>
      { children } 
    </div>
  </div>
)

export default Column
