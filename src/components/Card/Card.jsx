import React from 'react'
import CardTitle from './CardTitle'
import CardDescription from './CardDescription'
import CardActions from './CardActions'
import styles from './styles.module.css'

const Card = ({ title, description }) => (
  <div className={styles.card}>
    <div>
      <h3>{ title }</h3>
    </div>
    <div>
      <p>{ description }</p>
    </div>
    <div>
      <a href='#'>edit</a>
      <a href='#'>delete</a>
    </div>
  </div>
)

export default Card
