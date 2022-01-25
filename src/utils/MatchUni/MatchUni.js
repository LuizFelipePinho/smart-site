import api from '../../api/api'
import LocalStorage from '../LocalStorage/LocalStorage'

const MatchUni = () => {
    let result = []
    const dataForm = LocalStorage.getDataForm()

    api().then( (res) => {
            
        filUf(fixDataAPI(res), dataForm.UF)

    })
    .catch((err) => console.log(err))

    const fixDataAPI = (res) => {
        const dataRes = res.data.locations.splice(0,116)
        dataRes.splice(112, 1)
    
        return dataRes
    
       }
      
       
        const filUf = (valor, UF) => {

            const listaUni = []

            for(let i = 0; i <= valor.length; i++) {
                
    
                // O split vai dividir a string que veio da api e retorna uma lista
                const streetSeparate = valor[i].content.split(" ")
    
                // dentro da lista o ultimo quase sempre armazena a UF 
                const lastStreet = streetSeparate[streetSeparate.length - 1]
                
                // se esse elemento que possivelmente está armazenado a UF conter a uf passada como parametro, mostre ela
                if(lastStreet.includes(UF)) {
                    // listaUni.push(valor[i])
                    // console.log(valor[i]) 
                    listaUni[i] = valor[i]
                    // ta tendo a merda de um erro que eu não consigo fazer um push para a lista 
    
                }
    
            }
            console.log(listaUni)
            // return listaUni
        }
    return result

}

export default MatchUni