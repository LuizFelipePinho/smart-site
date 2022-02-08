import React from "react";
import './MessageForm.css';

const MessageForm = ({message}) => {

    return(
        <div className="box-message">
            <p className="message">{message}</p>
        </div>
    )

}
export default MessageForm