import { useState } from "react"

const GetDataFilter = (dataInput) => {

    let [data, setData] = useState([])

    setData(dataInput)

    console.log(data)
    // return data


}

export default GetDataFilter