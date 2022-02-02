
const FilterPeriod = (data, form) => {

    let dataAt = []

    for (let index = 0; index < data.length; index++) {
        let semana = data[index].schedules[0].hour
        let sabado = data[index].schedules[1].hour
        let domingo = data[index].schedules[2].hour

        // console.log(semana, sabado, domingo)

        console.log(form.period)

        let semanaAbertura = parseInt(semana.split(' ')[0].slice(0, 2))
        let semanaFechamento = parseInt(semana.split(' ')[2].slice(0, 2))


        if(form.period === 'manha' && ( (semanaAbertura >= 6 && semanaAbertura < 12) && semanaFechamento > 12)) {
            dataAt.push(data[index])

        } else if (form.period === 'tarde' && ( (semanaAbertura <= 12 && semanaAbertura < 18) && semanaFechamento >= 18)) {
            dataAt.push(data[index])


        } else if (form.period === 'noite' && (  (semanaAbertura <= 18 && semanaAbertura < 22) && semanaFechamento >= 22)) {
            dataAt.push(data[index])


        }



    }

    console.log(dataAt)
    return dataAt
    

    // let semanaHour = data.schedules[0].hour
    // let sabHour = data.schedules[1].hour
    // let domHour = data.schedules[2].hour

    // devemos mostrar a unidade que tiver o horario solicitado disponivel
    // vamos receber em period se é manha, tarde ou a noite
    // transformar os dados da api em um formato que tenha o horario de manha, da tarde e noite
    
    // let semanaSplitado = semanaHour.split(" ")
    // let abertura = semanaSplitado.shift()
    // let fechamento = semanaSplitado.pop()

    

    // console.log(fechamento)
    

    // console.log('abertura ' + abertura.slice(0, 2))
    // console.log(fechamento)
    // console.log(semanaHour)


    // if(period === "manha") {
        
    // }




}

export default FilterPeriod