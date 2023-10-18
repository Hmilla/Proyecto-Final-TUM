import { useParams } from "react-router-dom";
import {Blog, Comunidad, Proyectos} from '../index'

export default function Diversos(){
    const {subpage} = useParams()
    const subpagesDiversos = {
        "blog": <Blog />,
        "comunidad": <Comunidad />,
        "proyectos": <Proyectos />
    }

    return(
        <>
            {subpagesDiversos[subpage]}
        </>
    )
}