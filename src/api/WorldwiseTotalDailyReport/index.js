import axios from 'axios';

const url = "https://api.covid19api.com/summary";

export const fetchData = async() => {
    try {
        const { 
            data : {  
                Global : { NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered },
                Date: lastUpdate,
            }
        } = await axios.get(url)

        return {
            NewConfirmed,
            NewDeaths,
            NewRecovered,
            TotalConfirmed,
            TotalDeaths,
            TotalRecovered,
            lastUpdate
        }
    } catch (error) {}
}

export const fetchCountries = async () => {
  try {
    const { data : {Countries}} = await axios.get(url)

    const countries = Countries.map((country) => country.Country)
    
    return countries 
    
  } catch (error) {
    
  }
}