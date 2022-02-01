
const FixDataAPI = (data) => {

    // primeira correção: devo eliminar do arrays apartir do inicice 116
    data.splice(116, data.length)
    data.splice(29, 1)

    console.log(data)
    let dataAt = []

   for(let i = 0; i < data.length; i++) {

    const streetSeparate = data[i].content.split(";")
    let street = streetSeparate[0].replace('<p>', '').replace('&#8211', '')
    let region = streetSeparate[1].replace('<br>', ' ').replace('</p>', '').replace("'\n'", '')
    

        if(street.includes('&#8211') || region.includes('&#8211') || region.includes('<span>') || street.includes('<span>')){
            data.splice(i, 1)
        
        }
        else {

            let dataObj = {
                adress: [ {street: street}, {region: region}],
                fountain: data[i].fountain,
                id: data[i].id,
                locker_room: data[i].locker_room,
                mask: data[i].mask,
                opened: data[i].opened,
                // schedules: data[i].schedules,
                title: data[i].title

            }
            dataAt.push(dataObj)
            
        }


    }

    console.log(dataAt)


    

}

export default FixDataAPI;