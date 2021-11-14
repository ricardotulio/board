import React from 'react'
import styles from './styles.module.css'
import ColumnTitle from './ColumnTitle'

const Column = ({ children, title }) => (
  <div className={ styles.column }>
    <ColumnTitle>{ title }</ColumnTitle>
    <div className={ styles.cards }>
      { children } 
    </div>
  </div>
)

export default Column
