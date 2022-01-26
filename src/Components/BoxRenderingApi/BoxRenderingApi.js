import './BoxRenderingApi.css'
import BoxUni from './BoxUni/BoxUni'
import api from '../../api/api'
import { useEffect, useState } from 'react'
import LocalStorage from '../../utils/LocalStorage/LocalStorage'

const BoxRenderingApi = () => {

    const [ data, setData ] = useState([])
    

    // Quando a page for renderizada nós vamos pegar os dados da api e trata-la
    useEffect(  () => {
        api().then( (res) => {
            
            setData(fixDataAPI(res))
        })
        .catch((err) => console.log(err))
        

    }, [])

    const fixDataAPI = (res) => {
        const dataRes = res.data.locations.splice(0,115)
        dataRes.splice(112, 1)
        dataRes.splice(29, 1)

        // salva no localStorage com o a chave dataAPI uma copia do estado atual
        LocalStorage.savaData("dataAPI", dataRes)

        return dataRes

    
    }
  

    return(
        <div className="containerBoxUniRender">
            {/* <button onClick={() => filUfAndHours(data)}>Teste</button> */}
            { data.map( (unidade, index) => {
                
                if(index <= 2) {
                    return( <BoxUni key={unidade.id} data={unidade} />)
                }
            })}

        </div>
        )
} 

export default BoxRenderingApi