import './BoxAdress.css'

const BoxAdress = ({adress}) => {

    const streetSeparate = adress.split(";")
    const street = streetSeparate[0].replace('<p>', '').replace('&#8211', '')
    const region = streetSeparate[1].replace('<br>', ' ').replace('</p>', '')

    return(
        <div className='containerBoxAdress'>
            <p className='adress'>{street}</p>
            <p>{region}</p>
        </div>
    )
}

export default BoxAdress