import { useEffect, useState } from "react"
import axios from "axios"


export default function Indicators() {

    const [allIndicators, setallIndicators] = useState([])
    
    useEffect(() => {
        async function listIndicators() {
            const response = await axios.get("https://api.worldbank.org/v2/indicator?format=json")
            let indicators = response.data[1]
            setallIndicators(indicators)
            let indicatorIds = indicators.map(indicator => indicator.id)
            localStorage.setItem("indicators", indicatorIds)

        }
        listIndicators()
    }, [])
    
    return (
        <>
        <h1>Indicators Data</h1>
        <hr></hr>
        {
            allIndicators.map(indicator => 
                <div key={indicator.id}>
                    <h3 key={indicator.id}>{indicator.name}</h3>
                    <h4 key={indicator.id}>{indicator.id}</h4>
                    <hr></hr>
                </div>
            )
        }
        </>
    )
}