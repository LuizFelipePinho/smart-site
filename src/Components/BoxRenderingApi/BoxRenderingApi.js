import './BoxRenderingApi.css'
import BoxUni from './BoxUni/BoxUni'

const BoxRenderingApi = ({data}) => {

    return(
        <div className="containerBoxUniRender" id="containerBoxUniRender">
            { data.map( (unidade) => {
                return( <BoxUni key={unidade.id} data={unidade} />)
            })}
        </div>
        )
} 

export default BoxRenderingApi