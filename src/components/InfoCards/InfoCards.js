import React from "react"
import { Card, CardContent, Typography, Grid, Box } from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'

import styles from './Cards.module.css'

const Cards = (props) => {

  const { data : { 
      NewConfirmed,
      NewDeaths,
      NewRecovered,
      TotalConfirmed,
      TotalDeaths,
      TotalRecovered,
      lastUpdate 
      }} = props 
  if(!NewConfirmed) {
    return 'Loading...'
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent  textAlign="center" >
            <Box textAlign="center" mb={1}>
              <Typography variant="h6" color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
              <Typography color="textSecondary" gutterBottom>Infected</Typography>
              <Typography variant="h5">
                  <CountUp start={0} end={NewConfirmed} duration={2.5} separator=" " />
              </Typography>
            </Box>

            <Box textAlign="center" mb={2}>
              <Typography color="textSecondary" gutterBottom>Global</Typography>
                  <Typography variant="h5">
                    <CountUp start={0} end={TotalConfirmed} duration={3} separator=" " />
                  </Typography>
            </Box>

            <Box textAlign="center">
              <Typography variant="body2">Number of active cases of COVID-19</Typography>
            </Box>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Box textAlign="center" mb={1}>
              <Typography variant="h6" color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
              <Typography color="textSecondary" gutterBottom>Recovered</Typography>
              <Typography variant="h5">
              <CountUp start={0} end={NewRecovered} duration={2.5} separator=" " /> 
              </Typography>
            </Box>

            <Box textAlign="center" mb={2}>
              <Typography color="textSecondary" gutterBottom>Global</Typography>
              <Typography variant="h5">
                <CountUp start={0} end={TotalRecovered} duration={2.5} separator=" " />  
              </Typography>
            </Box>

            <Box textAlign="center">
              <Typography variant="body2">Number of recovered from COVID-19</Typography>
            </Box>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent >
            <Box textAlign="center" mb={1}>
            <Typography variant="h6" color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
              <Typography color="textSecondary" gutterBottom>Deaths</Typography>
              <Typography variant="h5">
              <CountUp start={0} end={NewDeaths} duration={2.5} separator=" " /> 
              </Typography>
            </Box>
              
            <Box textAlign="center" mb={2}>
              <Typography color="textSecondary" gutterBottom>Global</Typography>
              <Typography variant="h5">
                <CountUp start={0} end={TotalDeaths} duration={2.5} separator=" " /> 
              </Typography>
            </Box>
              
            <Box textAlign="center">
              <Typography variant="body2">Number of deaths cases caused by COVID-19</Typography>
            </Box>
          </CardContent>
        </Grid>     
      </Grid>
    </div>
  )
}

export default Cards;