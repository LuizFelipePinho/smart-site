
const FilterPeriod = (data, form) => {

    let dataAt = []

    for (let index = 0; index < data.length; index++) {
        let semana = data[index].schedules[0].hour
        // let sabado = data[index].schedules[1].hour
        // let domingo = data[index].schedules[2].hour

           

        let semanaAberturaSplit = semana.split(' ')[0]
        let semanaFechamentoSplit = semana.split(' ')[2]
        let semanaAbertura, semanaFechamento;


        if(semana === 'Fechada') {
            dataAt.push(data[index])


        } else {
            semanaAbertura = parseInt(semanaAberturaSplit.slice(0, 2))
            semanaFechamento = parseInt(semanaFechamentoSplit.slice(0, 2))
        } 



        if(form.period === 'manha' && ( (semanaAbertura >= 6 && semanaAbertura < 12) && semanaFechamento > 12)) {
            dataAt.push(data[index])

        } else if (form.period === 'tarde' && ( (semanaAbertura <= 12 && semanaAbertura < 18) && semanaFechamento >= 18)) {
            dataAt.push(data[index])


        } else if (form.period === 'noite' && (  (semanaAbertura <= 18 && semanaAbertura < 22) && (semanaFechamento <= 22) && semanaFechamento >= 21) ){
            dataAt.push(data[index])


        }



    }

    return dataAt
    




}

export default FilterPeriod