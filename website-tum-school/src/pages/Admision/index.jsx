import { useParams } from "react-router-dom";
import {CitaVisita, Inscripcion, Pensiones, Requisitos} from '../index'

export default function Admision(){
    const {subpage} = useParams()

    const subpagesAdmision = {
        "requisitos" : <Requisitos />,
        "pensiones" : <Pensiones />,
        "solicitaunacitayvisitaguiada": <CitaVisita />,
        "formulariodeinscripcion": <Inscripcion />
    }

    return(
        <>
            {subpagesAdmision[subpage]}
        </>
        
    )
}