import { useParams } from "react-router-dom";
import {BlogPage, ComunidadPage, ProyectosPage, NonExistent} from '../index'

export default function Diversos(){
    const {subpage} = useParams()
    const subpagesDiversos = {
        "blog": <BlogPage />,
        "comunidad": <ComunidadPage />,
        "proyectos": <ProyectosPage />
    }

    if(! subpagesDiversos[subpage]){
        return (
            <>
                <NonExistent />
            </>
        )
    }

    return(
        <>
            {subpagesDiversos[subpage]}
        </>
    )
}