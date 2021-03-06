import React from "react";
import './BoxProtocol.css'

const BoxProtocol = ({imgSrc, recom}) => {

    return(
        <div className="box-img-info">
            <img src={imgSrc} alt="boxProtocolImage" ></img>
            <p className="msg-protocol">{recom}</p>
        </div>
    )
}

export default BoxProtocol;