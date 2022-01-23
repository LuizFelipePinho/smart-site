import './BoxRenderingApi.css'
import BoxUni from './BoxUni/BoxUni'
import api from '../../api/api'
import { useEffect, useState } from 'react'
import LocalStorage from '../../utils/LocalStorage/LocalStorage'

const BoxRenderingApi = () => {

    const [ data, setData ] = useState([])
    
    useEffect(  () => {
        api.getData.then( (res) => {
            setData(res.data.locations.splice(0,116))
            FilterDataUF(res.data.locations.splice(0,116))
        })
        .catch((err) => console.log(err))
        

    }, [])

    const dataForm = LocalStorage.getDataForm()
    console.log(dataForm)

    // let address = data.content
    // let streetSeparate = address.split(";")
    // let region = streetSeparate[1].replace('<br>', ' ').replace('</p>', '')

    // fazer uma função que sera executada quando receber os dados da api lá no effect
    // nessa função devemos fazer um filter e dentro temos que arrumar uma forma de pegar a UF 

    const FilterDataUF = (data) => {

        const dataUF = data.map((elemento) => {
            let address = elemento.content;
            return address

            // let streetSeparate = address.split(";")
            // let region = streetSeparate[1].replace('<br>', ' ').replace('</p>', '')
            // let uf = region.split(",")
            // return uf



        })

        // return dataUF
        console.log(dataUF)



    }

    return(
        <div className="containerBoxUniRender">
            { data.map( (unidade, index) => {
                
                if(index <= 2) {
                    return( <BoxUni data={unidade}/>)
                }
            })}

        </div>
        )
} 

export default BoxRenderingApi