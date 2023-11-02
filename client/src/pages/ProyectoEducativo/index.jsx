import { useParams } from "react-router-dom";
import{ Ano2023Page, ApoyoPsicologicoPage, MetodologiaPage, NivelesPage, TalleresPage, NonExistent} from '../index'

export default function ProyectoEducativo(){
    const {subpage} = useParams()

    const subpagesProyectoEducativo = {
        "anoescolar2023" : <Ano2023Page />,
        "apoyopsicologico": <ApoyoPsicologicoPage />,
        "metodologia": <MetodologiaPage />,
        "niveles": <NivelesPage />,
        "talleres": <TalleresPage/>
    }

    if(! subpagesProyectoEducativo[subpage]){
        return (
            <>
                <NonExistent />
            </>
        )
    }

    return(
        <>
            {subpagesProyectoEducativo[subpage] }
        </>
    )
}