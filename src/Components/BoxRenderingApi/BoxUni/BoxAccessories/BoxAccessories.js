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
import imgLockrromFree from './images/required-lockerroom.png'

const BoxAccessories = ({dataAcessories}) => {

    let imgMask, imgTowel, imgFoutain, imgLockrrom;

    dataAcessories.mask === 'required' ? imgMask = <img className='acessssoriesImgbox' src={imgMaskRequired} ></img> :  imgMask = <img className='acessssoriesImgbox' src={imgMaskRecommended}></img>

    dataAcessories.towel === 'required' ? imgTowel = <img className='acessssoriesImgbox' src={imgTowelRequired}></img> : imgTowel = <img className='acessssoriesImgbox' src={imgTowelRecommended}></img>

    dataAcessories.fountain === 'partial' ? imgFoutain = <img className='acessssoriesImgbox' src={imgFountainPartil}></img> : imgFoutain = <img className='acessssoriesImgbox' src={imgFountainForbidden}></img>

    if(dataAcessories.lockerRoom === 'allowed') {
        imgLockrrom = <img className='acessssoriesImgbox' src={imgLockrromFree}></img>

    } else if (dataAcessories.lockerRoom === 'partial') {
        imgLockrrom = <img className='acessssoriesImgbox' src={imgLockrromPartial}></img>

    } else {
        imgLockrrom = <img className='acessssoriesImgbox' src={imgLockrromForbidden}></img>

    }

    return (
        <div>
           
            {imgMask}

            {imgTowel}

            {imgFoutain}

            {imgLockrrom}


        </div>
    )
}

export default BoxAccessories