const FixDataAPI =  (data) => {
    
    // primeira correção: devo eliminar do arrays apartir do inicice 116
    // const dataSplice = data.splice(116, data.length)
    // data.splice(29, 1)

    data.splice(116, data.length)


    let dataAt = []

    console.log(data)
   for(let i = 0; i < data.length; i++) {

    if(data[i].content.length <= 2) {
        data.splice(i, 1)

    }

    const streetSeparate = data[i].content.split(";")
    let street = streetSeparate[0].replace('<p>', '').replace('&#8211', '')
    let region = streetSeparate[1].replace('<br>', ' ').replace('</p>', '')
    


    if(street.includes('&#8211') || region.includes('&#8211') || region.includes('<span>') || street.includes('<span>')){
        data.splice(i, 1)
        
    }
    else {
        let regionSeparate = region.split(' ')
        let UF = regionSeparate.pop()

        if(UF.length >= 4 || UF.length <= 1) {
            data.splice(i, 1)

        } 
        
        else {
            let dataObj = {
                adress: [ {street: street}, {region: region}, {UF: UF}],
                fountain: data[i].fountain,
                id: data[i].id,
                locker_room: data[i].locker_room,
                mask: data[i].mask,
                opened: data[i].opened,
                schedules: data[i].schedules,
                title: data[i].title

            }
            dataAt.push(dataObj)
            
        }

    }



    }
    return dataAt


    

}

export default FixDataAPI;