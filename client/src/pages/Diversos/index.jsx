import { useParams } from "react-router-dom";
import {BlogPage, ComunidadPage, ProyectosPage} from '../index'
import {NonExistent} from '../../components'

export default function Diversos(){
    const {subpage} = useParams()
    const subpagesDiversos = {
        "blog": <BlogPage />,
        "comunidad": <ComunidadPage />,
        "proyectos": <ProyectosPage />
    }

    if(! subpagesDiversos[subpage]) return  <NonExistent />

    return(
        <>
            {subpagesDiversos[subpage]}
        </>
    )
}