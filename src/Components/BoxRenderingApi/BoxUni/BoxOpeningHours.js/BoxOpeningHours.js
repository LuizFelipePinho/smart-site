import './BoxOpeningHours.css'

const BoxOpeningHours = ({schedules}) => {
    return(
        <div className='containerOpeningHours'>

            <div className='infoOpBox'>
                <p className='infoOpeningDays'>{schedules[0].weekdays}</p>
                <p className='infoOpHours'>{schedules[0].hour}</p>
            </div> 

            <div className='infoOpBox'> 
                <p className='infoOpeningDays'>{schedules[1].weekdays}</p>
                <p className='infoOpHours'>{schedules[1].hour}</p>
            </div>

            <div className='infoOpBox'>
                <p className='infoOpeningDays'>{schedules[2].weekdays}</p>
                <p className='infoOpHours'>{schedules[2].hour}</p>
            </div>

        </div>
        )
}

export default BoxOpeningHours