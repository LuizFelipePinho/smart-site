import React from 'react';
import './Form.css'
import HeaderForm from '../HeaderForm/HeaderForm';
import LineInput from '../LineInput/LineInput';
import MessageForm from '../MessageForm/MessageForm';
import CloseUnit from '../ClosedUnit/ClosedUnit';
import Buttons from '../Buttons/Buttons';

const Form = () => {
    return(
        <div className="form">
            <HeaderForm />
            <MessageForm message="Qual periodo quer treinar?"/>
            <form > 
                <LineInput periodo="manha" horario="06:00 às 12:00"/>
                <LineInput periodo="tarde" horario="12:01 às 18:00"/>
                <LineInput periodo="noite" horario="18:01 às 23:00"/>

                <CloseUnit />     

                <Buttons />           
            </form>
        </div>
    )
}

export default Form