import './BoxOpen.css'

const BoxOpen = ({open}) => {
    let titleOpenOrClosed;
    let openMock = true

    if( openMock ) {
        titleOpenOrClosed = {
            titleOpen: 'titleOpenTrue', 
            msgOpen: 'Aberto'
        } 
    } else if (openMock === false) {
        titleOpenOrClosed = {
            titleOpen: 'titleOpenFalse', 
            msgOpen: 'Fechado'
        }
    }


    return(
        <p className={titleOpenOrClosed.titleOpen}>{titleOpenOrClosed.msgOpen}</p>
    )

}

export default BoxOpen