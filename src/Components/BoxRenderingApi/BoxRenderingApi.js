import './BoxRenderingApi.css'
import BoxUni from './BoxUni/BoxUni'

const BoxRenderingApi = ({data}) => {

    let units = data.map( (unidade) => {
        return( <BoxUni key={unidade.id} data={unidade} />)
    })

    let unitNotFound = <div className='containerUnitNotFound'>
            <p className='msgUnitNotFound'>Nenhuma unidade encontrada</p>
        </div>

    return(
        <div className="containerBoxUniRender" id="containerBoxUniRender">

            {
                data.length > 1 ? units : unitNotFound
            }

        </div>
        )
} 

export default BoxRenderingApi