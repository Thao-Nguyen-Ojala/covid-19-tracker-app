import React from "react"
import { CardContent, Typography, Box } from '@material-ui/core'
import CountUp from 'react-countup'

const InfoCard = (props) => {
  const { lastUpdate, newConfirmed, totalConfirmed, cardTitle, summary } = props
  return( 
    <CardContent  textAlign="center" >
      <Box textAlign="center" mb={1}>
        <Typography variant="h6" color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
        <Typography color="textSecondary" gutterBottom>{cardTitle}</Typography>
        <Typography variant="h5">
            <CountUp start={0} end={newConfirmed} duration={2.5} separator=" " />
        </Typography>
      </Box>

      <Box textAlign="center" mb={2}>
        <Typography color="textSecondary" gutterBottom>Global</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={totalConfirmed} duration={2.55} separator=" " />
            </Typography>
      </Box>

      <Box textAlign="center">
        <Typography variant="body2">{summary}</Typography>
      </Box>
    </CardContent> 
  )
}

export default InfoCard;