
// const ComparePeriod = (data, period) => {

//     let semanaHour = data.schedules[0].hour
//     let sabHour = data.schedules[1].hour
//     let domHour = data.schedules[2].hour

//     // devemos mostrar a unidade que tiver o horario solicitado disponivel
//     // vamos receber em period se é manha, tarde ou a noite
//     // transformar os dados da api em um formato que tenha o horario de manha, da tarde e noite
    
//     let semanaSplitado = semanaHour.split(" ")
//     let abertura = semanaSplitado.shift()
//     let fechamento = semanaSplitado.pop()

    

//     console.log(fechamento)
    

//     // console.log('abertura ' + abertura.slice(0, 2))
//     console.log(fechamento)
//     // console.log(semanaHour)


//     // if(period === "manha") {
        
//     // }




// }


const FilterUF = (valor, form) => {
    let UFInput = form.UF
    let closed = form.displayClosed
    let period = form.period
    //preciso pegar os dados que da hora




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