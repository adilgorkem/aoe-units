import React, { useEffect, useState } from 'react'
import classes from './Navbar.module.css'
import image1 from '../../assets/images/unit1.jpeg'
import image2 from '../../assets/images/unit2.jpeg'
import image3 from '../../assets/images/unit3.jpeg'
import image4 from '../../assets/images/unit4.jpeg'
import image5 from '../../assets/images/unit5.jpeg'
import Card from '../UI/Card'

export default function Navbar(props) {

  const images = [image1, image2, image3, image4, image5];

  const [img, setImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImage((i) => {
        return i === 4 ? 0 : i + 1
      });
    }, 5000);
    return () => {
      clearInterval(interval);
    }
  }, [])



  return (
    <Card className={classes.navbar}>
      <div className={classes.image}>
        <button style={{ backgroundImage: `url(${images[img]})` }} onClick={props.onHomePage}></button>
      </div>
      <div className={classes.title}><h1>{props.title}</h1></div>
      <div className={classes.button}>
        <button onClick={props.onHomePage}>Home</button>
        <button onClick={props.onUnitsPage}>Units</button>
      </div>
    </Card>
  )
}
