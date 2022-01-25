import './BoxRenderingApi.css'
import BoxUni from './BoxUni/BoxUni'
import api from '../../api/api'
import { useEffect, useState } from 'react'
import LocalStorage from '../../utils/LocalStorage/LocalStorage'

const BoxRenderingApi = () => {

    const [ data, setData ] = useState([])
    
    useEffect(  () => {
        api().then( (res) => {
            
            // const dataRes = res.data.locations.splice(0,116) 
            // console.log(dataRes)
            filUf(fixDataAPI(res))
            // setData(dataRes)
        })
        .catch((err) => console.log(err))
        

    }, [])

    /*
        processo de solução

    1º - botão de encotrar unidade é clicado e os dados do formulário são salvos em localstorage
    2º - preciso pegar em cada unidade o horario e a uf de cada unidade
    
    
    */
   const fixDataAPI = (res) => {
    const dataRes = res.data.locations.splice(0,116)
    dataRes.splice(112, 1)

    return dataRes

   }
  
   
    const filUf = (valor, UF) => {
        let UfTeste = 'RJ';

        for(let i = 0; i <= valor.length; i++) {
            

            // O split vai dividir a string que veio da api e retorna uma lista
            const streetSeparate = valor[i].content.split(" ")

            // dentro da lista o ultimo quase sempre armazena a UF 
            const lastStreet = streetSeparate[streetSeparate.length - 1]
            
            // se esse elemento que possivelmente está armazenado a UF conter a uf passada como parametro, mostre ela
            if(lastStreet.includes(UfTeste)) {
                // console.log(valor[i])

            }

        }

    }



    return(
        <div className="containerBoxUniRender">
            {/* <button onClick={() => filUfAndHours(data)}>Teste</button> */}
            { data.map( (unidade, index) => {
                
                if(index <= 2) {
                    return( <BoxUni key={unidade.id} data={unidade}/>)
                }
            })}

        </div>
        )
} 

export default BoxRenderingApi