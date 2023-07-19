import { useState, useEffect } from "react"
import axios from "axios"
import EditView from "./EditView"
import ViewData from "./ViewData"


export default function SavedViews() {

    const [savedViews, setSavedViews] = useState([])

    useEffect(() => {
		async function getAllSavedViews() {
			const response = await axios.get("http://localhost:9090/view")
			setSavedViews(response.data)
		}
		getAllSavedViews()

	}, [])
    
    
    return (
        <>
        <hr></hr>

        <h1>Views Data</h1>

        {
            savedViews.length > 0 ? 
            <table style={{border : "1px solid"}}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Chart Type</th>
                    <th>Indicator</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Delete</th>
                </tr>
            </table> : ""
        }

        {
            savedViews.length > 0 ? 
            <>
                
                <table style={{border : "1px solid"}}>
                    <tbody>
                    {
                        savedViews.map((view) => (
                            <ViewData view={view}/>
                        ))
                    }
                    </tbody>
                </table> 
                <EditView></EditView>
            </> 
        
        : 
            <h1>Fetching Data</h1>            
        }

        <hr></hr>
        
        </>
    )
}