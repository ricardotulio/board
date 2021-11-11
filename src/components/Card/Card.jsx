import React from 'react'
import CardTitle from './CardTitle'
import CardDescription from './CardTitle'
import styles from './styles.module.css'

const Card = ({ card }) => (
  <div className={styles.card}>
    <CardTitle title={ card.title } />
    <CardDescription title={ card.description } />
  </div>
)

export default Card
