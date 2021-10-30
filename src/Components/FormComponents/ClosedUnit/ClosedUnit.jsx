import React from "react";
import './ClosedUnit.css'

const CloseUnit = () => {
    return(
        <div className="box-closeUnit">
            <div className="closeUnits">
              <input type="checkbox" id="closedUnit"></input>
              <label for="closedUnit">Exibir unidades fechadas</label>
            </div>

            <div className="quantitClosed">
                <p>Resultado encontrados: </p>

            </div>
        </div>
    )
}

export default CloseUnit