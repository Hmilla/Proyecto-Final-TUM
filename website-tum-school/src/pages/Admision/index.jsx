import { useParams } from "react-router-dom";
import {CitaVisitaPage, InscripcionPage, PensionesPage, RequisitosPage} from '../index'

export default function Admision(){
    const {subpage} = useParams()

    const subpagesAdmision = {
        "requisitos" : <RequisitosPage />,
        "pensiones" : <PensionesPage />,
        "solicitaunacitayvisitaguiada": <CitaVisitaPage />,
        "formulariodeinscripcion": <InscripcionPage />
    }

    return(
        <>
            {subpagesAdmision[subpage]}
        </>
        
    )
}