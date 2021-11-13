import React from 'react'
import styles from './styles.module.css'

const Board = ({ children }) => (
  <div className={styles.board}>
    <div className={styles.container}>
      <div className={styles.columns}>
        { children }
      </div>
    </div>
  </div>
)

export default Board
