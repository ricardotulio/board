import React from 'react'
import styles from './styles.module.css'

const Modal = ({ children, active = false }) => (
  <div
    className={[styles.modal, (active ? styles.active : [])].join(' ')}
  >
    <div className={styles.content}>
      <span className={styles.close}>&times;</span>
      <div>{ children }</div>
    </div>
  </div>
)

export default Modal
