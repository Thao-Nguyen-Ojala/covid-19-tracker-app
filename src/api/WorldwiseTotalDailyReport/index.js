import axios from 'axios';

const url = "https://api.covid19api.com/summary";

export const fetchData = async() => {
    try {
        const { 
            data : {  
                Global : { 
                  NewConfirmed: newConfirmed,
                  NewDeaths: newDeaths , 
                  NewRecovered: newRecovered ,
                  TotalConfirmed: totalConfirmed,
                  TotalDeaths: totalDeaths , 
                  TotalRecovered: totalRecovered  },
                Date: lastUpdate,
            }
        } = await axios.get(url)

        return {
            newConfirmed, newDeaths, newRecovered, totalConfirmed, totalDeaths, totalRecovered,
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