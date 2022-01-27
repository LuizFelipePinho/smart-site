import React from 'react';
import './Form.css'
import HeaderForm from '../HeaderForm/HeaderForm';
import MessageForm from '../MessageForm/MessageForm';
import Buttons from '../Buttons/Buttons';
import { useState } from 'react';
import LocalStorage from '../../../utils/LocalStorage/LocalStorage';
import FilterUF from '../../../utils/FilterUF/FilterUF';
import Protocol from '../../Protocol/Protocol';
import BoxRenderingApi from '../../BoxRenderingApi/BoxRenderingApi'

const Form = () => {
    const [seletedOption, setseletedOption] = useState('')
    const [closeUnit, setcloseUnit] = useState(false)
	const [selectValue, setSelectValue] = useState("RJ");
    const [dataSearch, setDataSearch] = useState([])

    const handleSubmit = (evento) => {
        evento.preventDefault();

        const form = {
            period: seletedOption,
            UF: selectValue,
            displayClosed: closeUnit
        }

        LocalStorage.savaData("dataForm", form)

        const dataAPI  = LocalStorage.getData('dataAPI')

        const dataAPIUF = FilterUF(dataAPI, form)
        
        // GetDataFilter(dataAPIUF)
        setDataSearch(dataAPIUF)

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

    const ClearForm = (e) => {
        e.preventDefault()
        setseletedOption('')
        setcloseUnit(false)
        setDataSearch([])

    }
    return(
        <>
        <div className="form">
            <HeaderForm />
            <MessageForm message="Qual periodo quer treinar?"/>
            <form > 

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
                        <label htmlFor='manha' className="periodo" >Manhã</label>
                        <label htmlFor='manha'>06:00 às 12:00</label>
                    </section>
                </div>

                <div className="line-form" > 
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
                        <label htmlFor='tarde' className="tarde" >Tarde</label>
                        <label  htmlFor='tarde' >12:01 às 18:00</label>
                    </section>
                </div>

                <div className="line-form" > 
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
                        <label htmlFor='noite' className="noite" >Noite</label>
                        <label htmlFor='noite' >18:01 às 22:00</label>
                    </section>
                </div>

                <div className="line-form " >  
                    <section className="label-info selectOption">
                        <p className='formUF'>UF: </p>

                        <select
                            value={selectValue}
                            onChange={ event => setSelectValue(event.target.value)}
                            className="form-select"
                            >
                            {
                                list.map( item => (
                                    <option key={item.name} value={item.name}>{item.name}</option>
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
                        <p>Resultado encontrados: {dataSearch.length} </p>

                    </div>
                 </div>

                <Buttons onSubmit={handleSubmit} clear={ClearForm}/>           
             
            
            </form>
        </div>
        <Protocol />
        <BoxRenderingApi data={dataSearch}/>
        </>
    )
}

export default Form