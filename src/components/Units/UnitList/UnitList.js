import React from 'react'
import classes from './UnitList.module.css'

export default function Table(props) {

    const selectUnitHandler = () => {
        props.onClick(props.id)
    }

    return (
        <tr className={classes.tr} onClick={selectUnitHandler}>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.age}</td>
            {props.cost ? <td>{Object.keys(props.cost).map(key => `${key}: ${props.cost[key]} `)}</td> : <td>No Cost</td>}
        </tr>
    )
}
