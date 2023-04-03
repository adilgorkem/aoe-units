import React from 'react'
import Card from '../UI/Card'
import Modal from '../UI/Modal'
import classes from './UnitDetail.module.css'

export default function UnitDetail(props) {
  return (
    <Modal onClose={props.onClose} className={classes.wrapper}>
      <h2>{props.name}</h2>
      <Card className={classes['unit-detail']}>
        <ul>
          <li><b>Description:</b> {props.description}</li>
          <li><b>Cost:</b> {props.cost ? Object.keys(props.cost).map(key => `${key}: ${props.cost[key]} `) : 'No Cost'}</li>
          <li><b>Age:</b> {props.age}</li>
          <li><b>Attack:</b> {props.attack}</li>
          <li><b>Accuracy:</b> {props.accuracy}</li>
        </ul>
      </Card>
    </Modal>
  )
}
