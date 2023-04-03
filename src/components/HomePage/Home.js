import React, { useState } from 'react'
import Card from '../UI/Card';
import classes from './Home.module.css'

const Home = (props) => {

  const pages = [1, 2, 3]
  const [page, setPage] = useState(pages[0]);
  const setPageForwardHandler = () => {
    if (page === 1) {
      setPage(pages[1])
    } else if (page === 2) {
      setPage(pages[2])
    } else {
      setPage(pages[0])
    }
  }

  const setPagePreviousHandler = () => {
    if (page === 1) {
      return;
    } else if (page === 2) {
      setPage(pages[0])
    } else {
      setPage(pages[1])
    }
  }

  return (
    <Card className={classes.home}>
      <div className={classes.main}>
        <h2>Age of Empires Units Guide</h2>
        {page === 1 && <p>This guide is prepared by the developer for learning the general features of the war units of civilizations in Age of Empires. It demonstrates the strengths and weaknesses of them all so that the player can build a powerful strategy!</p>}
        {page === 2 && <p>You can filter the units upon their ages i.e. <i>Dark, Feudal, Castle, Imperial </i>by using the buttons. Filtering <i>All</i> ages is also provided. Besides selecting ages, you are also able to filter the units depending on their cost of <i>Wood, Food and Gold.</i> You will see a slider input to run this process.</p>
        }
        {page === 3 && <p>If you want to know more about a unit just click on it in the list!</p>}
        {page === 1 ?
          <button className={classes['page-1']} onClick={setPageForwardHandler}>Next</button>
          : page === 2 ?
            <div className={classes['page-2']}>
              <button onClick={setPagePreviousHandler}>Previous</button>
              <button onClick={setPageForwardHandler}>Next</button>
            </div>
            :
            <div className={classes['page-3']}>
              <button className={classes['btn-1']} onClick={setPagePreviousHandler}>Previous</button>
              <button className={classes['btn-2']} onClick={props.onUnitsPage}>Start!</button>
            </div>}
      </div>
    </Card>
  )
}

export default Home;