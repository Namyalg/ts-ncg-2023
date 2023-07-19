import { useRef } from "react"
import axios from "axios"

export default function PlotView() {

    const countryRef = useRef("")
    const nameRef = useRef("")
    const indicatorRef = useRef("")
    const startYearRef = useRef("")
    const endYearRef = useRef("")

    async function plotViewData(event) {
        
        event.preventDefault()

        let name = nameRef.current.value
        let country =  countryRef.current.value
        let indicator = indicatorRef.current.value
        let startDate = startYearRef.current.value
        let endDate = endYearRef.current.value

        let url = `https://api.worldbank.org/v2/country/${country}/indicator/${indicator}?date=${startDate}:${endDate}&format=json`
        const response = await axios.get(url)

        if(response.status == 200) {
            alert("Data fetched from API")
        }


        const body = {
            "name": nameRef.current.value,
            "chartType": "column",
            "country": countryRef.current.value,
            "indicator": indicatorRef.current.value,
            "startDate": startYearRef.current.valueAsNumber,
            "endDate": endYearRef.current.valueAsNumber
        }

        url = `http://localhost:9090/view/`
        const res = await axios.post(url, body)
        
        if(res.status == 200) {
            alert("View was saved successfully")
            window.location.reload()
        }
    }

    return (
        <>
            <form onSubmit={plotViewData}>
                <label>Country ISO Code</label>
                <input type="text" ref={countryRef}></input>

                <label>Indicator ID</label>
                <input type="text" ref={indicatorRef}></input>

                <label>Start year</label>
                <input type="text" ref={startYearRef}></input>

                <label>End year</label>
                <input type="text" ref={endYearRef}></input>

                <label>Name of View</label>
                <input type="text" ref={nameRef}></input>

                <button type="submit">Plot Data</button>

                <h1>API WILL FETCH DATA, HOWEVER, PLOTTING WILL NOT BE PERFORMED</h1>
            </form>
        </>
    )
}