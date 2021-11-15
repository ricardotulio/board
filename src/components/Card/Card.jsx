import React from 'react'
import styles from './styles.module.css'

const Card = ({ isBeingEdited = false, onChange, title, description }) => (
  <div className={styles.card}>
    <div>
      {!isBeingEdited ? <h3>{ title }</h3> : <input type='text' value={ title } onChange={ onChange } />} 
    </div>
    <div>
      <p>{ description }</p>
    </div>
    <div>
      <a href='#'>edit</a>
      <a href='#' onClick={ onDeleteClick }>delete</a>
    </div>
  </div>
)

export default Card
