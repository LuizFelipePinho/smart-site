import './BoxOpen.css'

const BoxOpen = ({open}) => {
    let titleOpenOrClosed;

    if( open ) {
        titleOpenOrClosed = {
            titleOpen: 'titleOpenTrue', 
            msgOpen: 'Aberto'
        } 
    } else if (open === false) {
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