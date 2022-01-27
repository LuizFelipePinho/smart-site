import React from "react";
import IconHour from './icon-hour.png'
import './HeaderForm.css'

const HeaderForm = () => {
    return(
        <div className="Header">
            <img src={IconHour} alt="imgHeader"/>
            <p>Horário</p>
        </div>
    )
}

export default HeaderForm