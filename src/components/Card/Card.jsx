import React from 'react'
import styles from './styles.module.css'

const Card = ({ isBeingEdited = false, onChange, title, description }) => (
  <div className={ styles.card }>
    <div className={ styles.container }>
      <div className={ styles.avatar }>
        <img src='https://www.shareicon.net/data/2016/09/15/829453_user_512x512.png' />
      </div>
      <div className={ styles.content }>
        <div className={ styles.title }>
          {!isBeingEdited ? <h5>{ title }</h5> : <input type='text' value={ title } onChange={ onChange } />} 
        </div>
        <div className={ styles.description }>
          <p>Lorem Ipsum is simply dummy text of the printing...</p>
        </div>
      </div>
    </div>
    <div className={ styles.actions }>
      <a href='#'>edit</a>
      <a href='#'>delete</a>
    </div>
  </div>
)

export default Card
