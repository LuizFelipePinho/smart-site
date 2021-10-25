import './Opening.css'

const Opening = ( {title, children} ) => {
    let titleUpper = title.toUpperCase()


    return(
        <>
        <div className="title">
            <h1>{titleUpper}</h1>
        </div>
        <p className="message"> {children} </p>
        </>
    )
}

export default Opening;