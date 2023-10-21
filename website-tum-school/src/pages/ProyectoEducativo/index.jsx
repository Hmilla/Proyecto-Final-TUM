import { useParams } from "react-router-dom";
import{ Ano2024Page, ApoyoPsicologicoPage, MetodologiaPage, NivelesPage, TalleresPage} from '../index'

export default function ProyectoEducativo(){
    const {subpage} = useParams()

    const subpagesProyectoEducativo = {
        "anoescolar2024" : <Ano2024Page />,
        "apoyopsicologico": <ApoyoPsicologicoPage />,
        "metodologia": <MetodologiaPage />,
        "niveles": <NivelesPage />,
        "talleres": <TalleresPage/>
    }

    return(
        <>
            {subpagesProyectoEducativo[subpage]}
        </>
    )
}