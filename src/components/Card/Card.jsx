import React from 'react'
import CardTitle from './CardTitle'
import CardDescription from './CardDescription'
import CardActions from './CardActions'
import styles from './styles.module.css'

const Card = ({ card }) => (
  <div className={styles.card}>
    <CardTitle title={ card.title } />
    <CardDescription description={ card.description } />
    <CardActions />
  </div>
)

export default Card
