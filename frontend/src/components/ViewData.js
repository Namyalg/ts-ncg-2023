import axios from "axios"

export default function ViewData(props) {
 
    async function deleteView() {
        let url = `http://localhost:9090/view/${props.view.id}`
        const response = await axios.delete(url)

        if(response.status == 200) {
            alert("Deleted successfully")
            window.location.reload()
        }
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>{props.view.id}</td>
                        <td>{props.view.name}</td>
                        <td>{props.view.chartType}</td>
                        <td>{props.view.indicator}</td>
                        <td>{props.view.startDate}</td>
                        <td>{props.view.endDate}</td>
                        <td><button onClick={deleteView}>Delete View</button></td>
                    </tr>
                </tbody>           
            </table>
        </>
    )
}