import React from "react";
import './LineInput.css';

const LineInput = ( {periodo, horario} ) => {


    return(
        <div className="line-form"> 
            <input type="radio" id="manha"/>
            <section className="label-info">
                <label for="manha" className="periodo">{periodo}</label>
                <label for="manha">{horario} </label>
            </section>
        </div>

    )
}

export default LineInput