import React from 'react'
import CardTitle from './CardTitle'
import CardDescription from './CardDescription'
import CardActions from './CardActions'
import styles from './styles.module.css'

const Card = ({ title, description }) => (
  <div className={styles.card}>
    <CardTitle title={ title } />
    <CardDescription description={ description } />
    <CardActions />
  </div>
)

export default Card
