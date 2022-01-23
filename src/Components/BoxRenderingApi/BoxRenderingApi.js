import './BoxRenderingApi.css'
import BoxUni from './BoxUni/BoxUni'
import api from '../../api/api'
import { useEffect, useState } from 'react'

const BoxRenderingApi = () => {

    const [ data, setData ] = useState([])
    
    // os objetos muda de padrão a partir de 116, preciso eliminar o restante até 167
    // dps preciso implementar uma forma de buscar via UF
    

    useEffect(  () => {
        api.getData.then( (res) => {
            setData(res.data.locations.splice(0,116))
        })
        .catch((err) => console.log(err))
        

    }, [])


    

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