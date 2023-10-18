import { useParams } from "react-router-dom";
import{ Ano2024, ApoyoPsicologico, Metodologia, Niveles, Talleres} from '../index'

export default function ProyectoEducativo(){
    const {subpage} = useParams()

    const subpagesProyectoEducativo = {
        "anoescolar2024" : <Ano2024 />,
        "apoyopsicologico": <ApoyoPsicologico />,
        "metodologia": <Metodologia />,
        "niveles": <Niveles />,
        "talleres": <Talleres />
    }

    return(
        <>
            {subpagesProyectoEducativo[subpage]}
        </>
    )
}