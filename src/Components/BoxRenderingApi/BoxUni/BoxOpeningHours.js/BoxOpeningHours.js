import './BoxOpeningHours.css'

const BoxOpeningHours = ({schedules}) => {
    return(
        <div className='containerOpeningHours'>

            <div className='infoOpBox'>
                <p className='infoOpeningDays'>Seg. à Sex.</p>
                <p className='infoOpHours'>06h às 22h</p>
            </div> 

            <div className='infoOpBox'> 
                <p className='infoOpeningDays'>Sáb</p>
                <p lassName='infoOpHours'>09h às 18h</p>
            </div>

            <div className='infoOpBox'>
                <p className='infoOpeningDays'>Dom.</p>
                <p>Fechada</p>
            </div>

        </div>
        )
}

export default BoxOpeningHours