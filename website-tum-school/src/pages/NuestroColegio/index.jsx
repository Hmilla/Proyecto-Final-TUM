import { useParams } from "react-router-dom";
import  Afiliaciones from './Afiliaciones'

export default function NuestroColegio(){
    const {subpage} = useParams()

    const NuestroColegio = {
        "afiliaciones": <Afiliaciones />
    }

    return(
        <h1>{subpage} {NuestroColegio[subpage]}</h1>
    )
}