import axios from 'axios';

const url = "https://api.covid19api.com/dayone/country";

export const fetchDailyData = async(country) => {
  let changeableUrl = url;

  if(country) {
    changeableUrl = `${url}/${country}`
  }

    try {
      const {
        data 
      } = await axios.get(changeableUrl)

      const fetchedDailyData = data.map((dailyData) => ({
        Confirmed: dailyData.Confirmed,
        Deaths: dailyData.Deaths,
        Recovered: dailyData.Recovered,
        reportDate: dailyData.Date
      }))

      return fetchedDailyData 
    } catch (error) {
      console.log(error)
    }
}


