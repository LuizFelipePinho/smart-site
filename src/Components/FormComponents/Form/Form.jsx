import React from 'react';
import './Form.css'
import HeaderForm from '../HeaderForm/HeaderForm';
import MessageForm from '../MessageForm/MessageForm';
import Buttons from '../Buttons/Buttons';
import { useState } from 'react';
import LocalStorage from '../../../utils/LocalStorage/LocalStorage';

const Form = () => {
    const [seletedOption, setseletedOption] = useState('')
    const [closeUnit, setcloseUnit] = useState(false)
	const [selectValue, setSelectValue] = useState("RJ");

    const handleSubmit = (evento) => {
        evento.preventDefault();

        const form = {
            period: seletedOption,
            UF: selectValue,
            displayClosed: closeUnit
        }

        console.log(form);
        LocalStorage.savaDataForm(form)

    }

    const handleChecked = (evento) => {
        setseletedOption(evento.target.value)
    
    }

    const closeUnitFunc = (e) => {
       
        !closeUnit ? setcloseUnit(true) : setcloseUnit(false) 

    }

    const list = [
        { name: "RJ" },
		{ name: "SP" },
		{ name: "CE" },
		{ name: "MG" },
		{ name: "RN" },
		{ name: "BA" },
		{ name: "PE" },
		{ name: "RR" },
		{ name: "AL" },
		{ name: "PB" },
		{ name: "MT" },
		{ name: "ES" },
		{ name: "GO" },
		{ name: "AP" },
	];

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
                        <label id="noite">18:01 às 22:00</label>
                    </section>
                </div>

                <div className="line-form "> 
                    <section className="label-info selectOption">
                        <p className='formUF'>UF: </p>

                        <select
                            value={selectValue}
                            onChange={ event => setSelectValue(event.target.value)}
                            class="form-select"
                            >
                            {
                                list.map( item => (
                                    <option value={item.name}>{item.name}</option>
                                ))
                            }
                    </select>
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