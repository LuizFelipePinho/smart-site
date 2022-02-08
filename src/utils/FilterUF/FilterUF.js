
// devolve somente o elemeto que teve a UF procurada, mas tenho que implementar a busca pelo horario
const FilterUF = (valor, form) => {
    let UFInput = form.UF
    let closed = form.displayClosed



    // se o usuario quiser que mostre as unidades fechadas será retornado true 
    let listaUni = []

    for(let i = 0; i < valor.length; i++) {

        let UF = valor[i].adress[2].UF
        
        // // se esse elemento que possivelmente está armazenado a UF conter a uf passada como parametro, mostre ela
        if(UF.includes(UFInput) ) {


            if(!closed && valor[i].opened === true ) {
                const result = valor[i]
                listaUni.push(result)

            } else if(closed) {
                const result = valor[i]
                listaUni.push(result)
            }


        }
            

    } 
    return listaUni
}








export default FilterUF