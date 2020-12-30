import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api/WorldwiseTotalDailyReport";

import styles from "./CountryPicker.module.css"

const CountryPicker = (props) => {

  const { handleCountryChange } = props
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchedAPI = async () => {
      setFetchedCountries(await fetchCountries())
    }

    fetchedAPI()
  },[setFetchedCountries])

    return (
        <FormControl className={styles.formControl}>
          <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
            <option>Select a country</option>
            {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
          </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;