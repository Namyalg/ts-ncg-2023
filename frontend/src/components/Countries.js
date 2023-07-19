import { useEffect, useState } from "react"
import axios from "axios"

export default function Countries() {

    const [allCountries, setAllCountries] = useState([])
    
    useEffect(() => {
        async function listCountries() {
            const response = await axios.get("https://api.worldbank.org/v2/country?format=json")
            let countryNames = response.data[1].map(country => country.name)
            setAllCountries(countryNames)
            localStorage.setItem("countries", countryNames)
        }
        listCountries()
    }, [])
    
    return (
        <>
        <h1>Country Data</h1>
        <hr></hr>
        {
            allCountries.map(country => 
                <h3>{country}</h3>
            )
        }
        </>
    )
}