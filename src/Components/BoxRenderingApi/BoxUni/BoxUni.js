import './BoxUni.css'
import BoxTitle from "./BoxTitle.js/BoxTitle";
import BoxOpen from './BoxOpen/BoxOpen';
import BoxAdress from './BoxAdress.js/BoxAdress';
import BoxAccessories from './BoxAccessories/BoxAccessories';
import BoxOpeningHours from './BoxOpeningHours.js/BoxOpeningHours';

const BoxUni = () => {

    const address = {
        street: 'Rua tiburicio Cavalvante, 1887 - Meirelles',
        region: 'Fortaleza, CE',
    }
    return(
        <div className="containerBoxUni">
            <BoxOpen open={'Aberto'}/>
            <BoxTitle title={'Vicente Linhares'}/>
            <BoxAdress adress={address}/>
            <BoxAccessories />
            <BoxOpeningHours />
        </div>
    )
} 

export default BoxUni;