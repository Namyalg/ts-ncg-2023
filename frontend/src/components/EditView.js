import { useRef } from "react"
import axios from "axios"

export default function EditView() {

    const countryRef = useRef("")
    const nameRef = useRef("")
    const indicatorRef = useRef("")
    const startYearRef = useRef("")
    const endYearRef = useRef("")
    const idRef = useRef("")
    const chartRef = useRef("")

    async function modifyViewData(event) {
        event.preventDefault()

        let url = `http://localhost:9090/view/${idRef.current.valueAsNumber}`

        const body = {
            "id": idRef.current.valueAsNumber,
            "name": nameRef.current.value,
            "chartType": chartRef.current.value,
            "country": countryRef.current.value,
            "indicator": indicatorRef.current.value,
            "startDate": startYearRef.current.valueAsNumber,
            "endDate": endYearRef.current.valueAsNumber
        }

        const response = await axios.put(url, body)
        
        if(response.status == 200) {
            alert("Update was successful")
            window.location.reload()
        }

    }

    return (
        <>
            <h1>Modify View Data</h1>
            <form onSubmit={modifyViewData}>
                <label>View ID</label>
                <input type="number" ref={idRef}></input>
                <br></br>
                <label>View Name</label>
                <input type="text" ref={nameRef}></input>
                <br></br>
                <label>Country ISO Code</label>
                <input type="text" ref={countryRef}></input>
                <br></br>
                <label>Chart Type</label>
                <input type="text" ref={chartRef}></input>
                <br></br>
                <label>Indicator ID</label>
                <input type="text" ref={indicatorRef}></input>
                <br></br>
                <label>Start year</label>
                <input type="number" ref={startYearRef}></input>
                <br></br>
                <label>End year</label>
                <input type="number" ref={endYearRef}></input>
                <br></br>
                <button type="submit">Modify View Data</button>
            </form>
        </>
    )
}