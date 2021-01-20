import React from "react"

import { InfoCards, CountryChart, CountryPicker, Footer } from "./components"
import styles from './App.module.css'
import { fetchData } from './api/WorldwiseTotalDailyReport'
import { fetchDailyData } from './api/CountryDailyReport'
import { CircularProgress } from '@material-ui/core'

import covidImage from './media/images/image.png'

class App extends React.Component{
  state = {
    data: {},
    countrySpecificData: [],
    country: "",
    loadingCountryChart: false
  } 

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    this.setState({loadingCountryChart: true})

    const fetchedDailyData = await fetchDailyData(country)
    this.setState({ countrySpecificData: fetchedDailyData, loadingCountryChart: false })
  }

  isObjEmpty = (obj) => {
    return Object.keys(obj).length === 0  
  }

  render() {
    const { data, countrySpecificData, loadingCountryChart } = this.state

    return(
      <div className={styles.container}>
        <img className={styles.image} src={covidImage} alt='Covid-19'/>
        {this.isObjEmpty(data) ? <CircularProgress color="secondary" /> : <InfoCards data = {data}/>}
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        {!loadingCountryChart ? <CountryChart dailyData={countrySpecificData}/> : <CircularProgress color="secondary" />}
        <Footer />
      </div>
    )
  }
}

export default App;
