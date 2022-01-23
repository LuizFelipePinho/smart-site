import React from 'react';
import './Form.css'
import HeaderForm from '../HeaderForm/HeaderForm';
import MessageForm from '../MessageForm/MessageForm';
import Buttons from '../Buttons/Buttons';
import { useState } from 'react';


const Form = () => {
    const [seletedOption, setseletedOption] = useState('')
    const [closeUnit, setcloseUnit] = useState(false)

    const handleSubmit = (evento) => {
        evento.preventDefault();

        const form = {
            period: seletedOption,
            open: closeUnit
        }
        console.log(form);

    }

    const handleChecked = (evento) => {
        setseletedOption(evento.target.value)
    
    }

    const closeUnitFunc = (e) => {
       
        !closeUnit ? setcloseUnit(true) : setcloseUnit(false) 

    }

    return(
        <div className="form">
            <HeaderForm />
            <MessageForm message="Qual periodo quer treinar?"/>
            <form onSubmit={ handleSubmit}> 

                <div className="line-form"> 
                    <input 
                    className="typeRadioCss" 
                    type="radio" 
                    id="manha"
                    value="manha"
                    name="optionHours"
                    checked={seletedOption === "manha"}
                    onChange={handleChecked}
                    />
                    <section className="label-info">
                        <label id="manha" className="periodo" >Manhã</label>
                        <label id="manha">06:00 às 12:00</label>
                    </section>
                </div>

                <div className="line-form"> 
                    <input 
                    className="typeRadioCss" 
                    type="radio" 
                    id="tarde"
                    value="tarde"
                    name="optionHours"
                    checked={seletedOption === "tarde"}
                    onChange={handleChecked}
                    />
                    <section className="label-info">
                        <label id="tarde" className="tarde" >Tarde</label>
                        <label id="tarde">12:01 às 18:00</label>
                    </section>
                </div>

                <div className="line-form"> 
                    <input 
                    className="typeRadioCss" 
                    type="radio" 
                    id="noite"
                    value="noite"
                    name="optionHours"
                    checked={seletedOption === "noite"}
                    onChange={handleChecked}
                    />
                    <section className="label-info">
                        <label id="noite" className="noite" >Noite</label>
                        <label id="noite">18:01 às 23:00</label>
                    </section>
                </div>


                <div className="box-closeUnit">
                    <div className="closeUnits">
                    <input type="checkbox" id="closedUnit" checked={closeUnit} onClick={(e) => closeUnitFunc(e)}></input>
                    <label for="closedUnit">Exibir unidades fechadas</label>
                    </div>

                    <div className="quantitClosed">
                        <p>Resultado encontrados: </p>

                    </div>
                 </div>

                <Buttons onSubmit={handleSubmit}/>           
             
            
            </form>
        </div>
    )
}

export default Form