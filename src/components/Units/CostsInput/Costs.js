import React, { useState, useRef } from 'react'
import Card from '../../UI/Card'
import classes from './Costs.module.css'

export default function Costs(props) {

    const [woodState, setWoodState] = useState(false);
    const [foodState, setFoodState] = useState(false);
    const [goldState, setGoldState] = useState(false);

    const woodStateHandler = () => {
        setWoodState(!woodState)
    }
    const foodStateHandler = () => {
        setFoodState(!foodState)
    }
    const goldStateHandler = () => {
        setGoldState(!goldState)
    }

    const [costs, setCosts] = useState({ wood: 0, food: 0, gold: 0 })

    const woodCost = useRef('');
    const foodCost = useRef('');
    const goldCost = useRef('');

    


    let enteredWoodCost = woodState ? woodCost.current.value : 0;
    let enteredFoodCost = foodState ? foodCost.current.value : 0;
    let enteredGoldCost = goldState ? goldCost.current.value : 0;

   

    const submitHandler = (e) => {
        e.preventDefault();
        setCosts({
            wood: +enteredWoodCost,
            food: +enteredFoodCost,
            gold: +enteredGoldCost
        })
        props.onSelectCost(costs)
    }


    return (
        <Card className={classes.costs}>
            <h3>Costs</h3>
            <div className={classes['cost-inputs']}>
                <div>
                    <div className={classes.wood}>
                        <input id='wood' type='checkbox' onChange={woodStateHandler}/>
                        <label htmlFor='wood'>Wood</label>
                    </div>
                    <input onChange={submitHandler} ref={woodCost} type='range' min='0' max='200' defaultValue='0' />
                </div>
                <div>
                    <div className={classes.food}>
                        <input id='food' type='checkbox' onChange={foodStateHandler}/>
                        <label htmlFor='food'>Food</label>
                    </div>
                    <input onChange={submitHandler} ref={foodCost} type='range' min='0' max='200' defaultValue='0' />
                </div>
                <div>
                    <div className={classes.gold}>
                        <input id='gold' type='checkbox' onChange={goldStateHandler}/>
                        <label htmlFor='gold'>Gold</label>
                    </div>
                    <input onChange={submitHandler} ref={goldCost} type='range' min='0' max='200' defaultValue='0' />
                </div>
            </div>
        </Card>
    )
}
