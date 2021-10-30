import React from "react";
import './LineInput.css';

const LineInput = ( {checked, periodo, horario, onChange} ) => {

    return(
        <div className="line-form"> 
            <input type="checkbox" id={periodo} value={periodo} onChange={onChange}/>
            <section className="label-info">
                <label id={periodo} className="periodo">{periodo}</label>
                <label id={periodo}>{horario} </label>
            </section>
        </div>

    )
}

export default LineInput