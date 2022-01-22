import './BoxAdress.css'

const BoxAdress = ({adress}) => {
    return(
        <div className='containerBoxAdress'>
            <p className='adress'>{adress.street}</p>
            <p>{adress.region}</p>
        </div>
    )
}

export default BoxAdress