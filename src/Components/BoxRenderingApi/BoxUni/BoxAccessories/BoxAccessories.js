import './BoxAcessories.css'
/* eslint-disable jsx-a11y/alt-text */
import imgMaskRequired from './images/required-mask.png'
import imgMaskRecommended from './images/recommended-mask.png'
import imgTowelRequired from './images/required-towel.png'
import imgTowelRecommended from './images/recommended-towel.png'
import imgFountainPartil from './images/partial-fountain.png'
import imgFountainForbidden from './images/forbidden-fountain.png'
import imgLockrromForbidden from './images/forbidden-lockerroom.png'
import imgLockrromPartial from './images/partial-lockerroom.png'

const BoxAccessories = ({mask, towel, fountain, locker_room}) => {
    

    return (
        <div>
            <img className='acessssoriesImgbox' src={imgMaskRequired} ></img>
            {/* <img src={imgMaskRecommended}></img> */}
            <img className='acessssoriesImgbox' src={imgTowelRequired}></img>
            {/* <img src={imgTowelRecommended}></img> */}
            <img className='acessssoriesImgbox' src={imgFountainPartil}></img>
            {/* <img src={imgFountainForbidden}></img> */}
            {/* <img src={imgLockrromPartial}></img> */}
            <img className='acessssoriesImgbox' src={imgLockrromForbidden}></img>


        </div>
    )
}

export default BoxAccessories