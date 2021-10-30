import React from "react";
import './Protocol.css';
import mascaObri from './images/required-mask.png';
import mascaOpc from './images/recommended-mask.png';
import toalhaObri from './images/required-towel.png';
import toalhaOpc from './images/recommended-towel.png';
import garraObri from './images/forbidden-fountain.png';
import garraOpc from './images/partial-fountain.png';
import vestiLib from './images/required-lockerroom.png';
import vestiPar from './images/partial-lockerroom.png';
import vestiProi from './images/forbidden-lockerroom.png';


import BoxProtocol from "./BoxProtocol/BoxProtocol";
import CotainerProtocol from './ContainerProtocol/ContainerProtocol';


const Protocol = () => {
    return(
        <div className="box-protocols">

            <CotainerProtocol title="máscaras">
                <BoxProtocol imgSrc={mascaObri} recom="obrigatório" />
                <BoxProtocol imgSrc={mascaOpc} recom="recomendado" />
            </CotainerProtocol>

            <CotainerProtocol title="toalha">
                <BoxProtocol imgSrc={toalhaObri} recom="obrigatório" />
                <BoxProtocol imgSrc={toalhaOpc} recom="recomendado" />
            </CotainerProtocol>

            <CotainerProtocol title="bebedouro">
                <BoxProtocol imgSrc={garraOpc} recom="parcial" />
                <BoxProtocol imgSrc={garraObri} recom="proibido" />
            </CotainerProtocol>

            <CotainerProtocol title="vestiário">
                <BoxProtocol imgSrc={vestiLib} recom="liberado" />
                <BoxProtocol imgSrc={vestiPar} recom="parcial" />
                <BoxProtocol imgSrc={vestiProi} recom="fechado" />

            </CotainerProtocol>
                
                

        </div>

    )
}

export default Protocol;