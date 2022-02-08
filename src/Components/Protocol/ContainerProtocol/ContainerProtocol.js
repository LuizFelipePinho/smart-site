import React from "react";
import './ContainerProtocol.css'

const CotainerProtocol = ({title, children}) => {
    
    return (
        <div className="protocol">
            <h5 className="title-protocol">{title}</h5>
            <div className="box-protocol">
                {children}
            </div>
        </div>

    )
}

export default CotainerProtocol;