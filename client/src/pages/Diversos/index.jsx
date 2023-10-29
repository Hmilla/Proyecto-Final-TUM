import { useParams } from "react-router-dom";
import {BlogPage, ComunidadPage, ProyectosPage} from '../index'

export default function Diversos(){
    const {subpage} = useParams()
    const subpagesDiversos = {
        "blog": <BlogPage />,
        "comunidad": <ComunidadPage />,
        "proyectos": <ProyectosPage />
    }

    return(
        <>
            {subpagesDiversos[subpage]}
        </>
    )
}