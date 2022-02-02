import './BoxAdress.css'

const BoxAdress = ({adress}) => {

   let street = adress[0].street
   let region = adress[1].region

   return(
        <div className='containerBoxAdress'>
            <p className='adress'>{street}</p>
            <p>{region}</p> 
       </div>
    )
}

export default BoxAdress