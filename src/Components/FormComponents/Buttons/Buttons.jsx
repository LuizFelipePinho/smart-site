import React from "react";
import './Buttons.css'

const Buttons = ({onSubmit}) => {

   
    return(
        <div className="buttons">
            <button type="submit" className="btn-serch-unit" onClick={onSubmit}>Encontrar unidade</button>
            <button type="submit" className="btn-clean">Limpar</button>

        </div>


    )
}

export default Buttons;