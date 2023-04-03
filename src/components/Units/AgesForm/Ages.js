import React from 'react'
import Card from '../../UI/Card'
import classes from './Ages.module.css'

export default function Ages(props) {

  const submitAgeHandler = (e) => {
    props.onSelectAge(e.target.value);
  }


  return (
    <Card className={classes.ages}>
        <h3>Ages</h3>
        <div>
        <label htmlFor='All'></label>
        <input id='All' type='submit' value='All' onClick={submitAgeHandler}/>
        <label htmlFor='Dark'></label>
        <input id='Dark' type='submit' value='Dark' onClick={submitAgeHandler}/>
        <label htmlFor='Feudal'></label>
        <input id='Feudal' type='submit' value='Feudal' onClick={submitAgeHandler}/>
        <label htmlFor='Castle'></label>
        <input id='Castle' type='submit' value='Castle' onClick={submitAgeHandler}/>
        <label htmlFor='Imperial'></label>
        <input id='Imperial' type='submit' value='Imperial' onClick={submitAgeHandler}/>
        </div>
    </Card>
  )
}
