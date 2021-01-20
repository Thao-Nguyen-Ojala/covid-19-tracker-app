import React from "react"
import { Card, Grid } from '@material-ui/core'
import cx from 'classnames'
import InfoCard from './InfoCard/InfoCard'

import styles from './InfoCards.module.css'

const InfoCards = (props) => {
  const { data : {
      newConfirmed, 
      newDeaths, 
      newRecovered, 
      totalConfirmed, 
      totalDeaths, 
      totalRecovered,
      lastUpdate 
    }
  } = props 

  console.log("new confirmed", newConfirmed)
  if(!newConfirmed) {
    return 'Loading...'
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <InfoCard
            lastUpdate={lastUpdate} 
            newConfirmed={newConfirmed} 
            totalConfirmed={totalConfirmed} 
            cardTitle={"Infected"} 
            summary={"Number of active cases of COVID-19"}
          />
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <InfoCard 
            lastUpdate={lastUpdate} 
            newConfirmed={newRecovered} 
            totalConfirmed={totalRecovered} 
            cardTitle={"Recovered"} 
            summary={"Number of recovered from COVID-19"}
          />
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
        <InfoCard 
          lastUpdate={lastUpdate} 
          newConfirmed={newDeaths} 
          totalConfirmed={totalDeaths} 
          cardTitle={"Deaths"} 
          summary={"Number of death cases caused by COVID-19"}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default InfoCards;