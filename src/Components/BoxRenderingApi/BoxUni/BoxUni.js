import './BoxUni.css'
import BoxTitle from "./BoxTitle.js/BoxTitle";
import BoxOpen from './BoxOpen/BoxOpen';
import BoxAdress from './BoxAdress.js/BoxAdress';
import BoxAccessories from './BoxAccessories/BoxAccessories';
import BoxOpeningHours from './BoxOpeningHours.js/BoxOpeningHours';

const BoxUni = ({data}) => {


    const dataAcessories = {
        mask: data.mask,
        towel: data.towel,
        fountain: data.fountain,
        lockerRoom: data.locker_room
    }
    return(
        <div className="containerBoxUni">
            <BoxOpen open={data.opened}/>
            <BoxTitle title={data.title}/>
            <BoxAdress adress={data.content}/>
            <BoxAccessories dataAcessories={dataAcessories} />
            <BoxOpeningHours schedules={data.schedules}/>
        </div>
    )
} 

export default BoxUni;