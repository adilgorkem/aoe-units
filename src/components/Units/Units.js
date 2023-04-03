import React, { useState } from 'react'
import Card from '../UI/Card';
import Ages from './AgesForm/Ages';
import Costs from './CostsInput/Costs';
import UnitList from './UnitList/UnitList';
import classes from './Units.module.css'

export default function Units(props) {

    const data = props.data;

    const [ageFilteredData, setAgeFilteredData] = useState(data.units);
    const [finalData, setFinalData] = useState([]);
    const [showList, setShowList] = useState(false);

    const selectAgeHandler = (selectedAge) => {
        if (selectedAge === 'All') {
            setAgeFilteredData(data.units);
        } else {
            setAgeFilteredData(data.units.filter(item => item.age === selectedAge));
        }
        setShowList(true);
    }


    const costHandler = (data) => {
        if(data.wood !== 0 || data.food !== 0 || data.gold !== 0) {
        setFinalData(ageFilteredData.filter(unit => unit.cost?.Wood ? unit.cost?.Wood <= data.wood : unit).filter(unit => unit.cost?.Food ? unit.cost?.Food <= data.food : unit).filter(unit => unit.cost?.Gold ? unit.cost?.Gold <= data.gold : unit))}
    }


    const unitDetailHandler = (id) => {
        props.onUnitDetail(id)
    }


    return (
        <div className={classes.units}>
            <Ages onSelectAge={selectAgeHandler} />
            <Costs onSelectCost={costHandler} />
            {showList && <Card className={classes.table}>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {finalData && finalData.map(item =>
                            <UnitList onClick={unitDetailHandler} id={item.id} key={item.id} name={item.name} age={item.age} cost={item.cost} />)}
                    </tbody>
                </table>
            </Card>}
        </div>
    )
}
