import React from 'react';
import './Form.css'
import HeaderForm from '../HeaderForm/HeaderForm';
import LineInput from '../LineInput/LineInput';
import MessageForm from '../MessageForm/MessageForm';
import CloseUnit from '../ClosedUnit/ClosedUnit';
import Buttons from '../Buttons/Buttons';
import { useState, useEffect } from 'react';





const Form = () => {

    const [option, setOption] = useState([])

    const handleSubmit = (evento) => {
        evento.preventDefault();
        console.log(option)
        
    }

    const handleChange = (evento) => {
        console.log(evento)
        const periodo = evento.target.value;
        console.log(periodo);
        setOption(periodo);
        
    }



    return(
        <div className="form">
            <HeaderForm />
            <MessageForm message="Qual periodo quer treinar?"/>
            <form onSubmit={ handleSubmit}> 
                <LineInput onChange={handleChange} periodo="manha" horario="06:00 às 12:00"/>
                <LineInput onChange={handleChange} periodo="tarde" horario="12:01 às 18:00"/>
                <LineInput onChange={handleChange} periodo="noite" horario="18:01 às 23:00"/>

                <CloseUnit />     

                <Buttons />           
            </form>
        </div>
    )
}

export default Form