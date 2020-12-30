import React from "react"
import { Line } from 'react-chartjs-2'


import styles from './Chart.module.css'

const Chart = (props) => {
  
  const { dailyData } = props

  const changeToReableDate = (reportDate) => {
    const readableDate = new Date(reportDate).toDateString()
    return readableDate
  }

  const lineChart = (
    dailyData && dailyData.length
      ? (
        <Line
          data={{
          labels: dailyData.map(({reportDate}) => changeToReableDate(reportDate)),
          datasets: [
            {
              data: dailyData.map(({ Confirmed }) => Confirmed),
              label: "Infected",
              borderColor: "#3333ff",
              backgroundColor: "rgba(0, 0, 255,0.5)",
              fill: true
            }, 
            {
              data: dailyData.map(({ Deaths }) => Deaths),
              label: "Deaths",
              borderColor: "red",
              backgroundColor: "rgba(255, 0, 0,0.5)",
              fill: true
            }, 
            {
              data: dailyData.map(({ Recovered }) => Recovered),
              label: "Recovered",
              borderColor: "green",
              backgroundColor: "rgba(0, 255, 0, 0.5)",
              fill: true
            }
          ]
          }}
        />
      ) : null
    )
          
  return (
    <div className={styles.container}>
      {lineChart}
    </div>
  )
}

export default Chart;