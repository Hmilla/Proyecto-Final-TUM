import { useParams } from "react-router-dom";
import { PensionesPage, RequisitosPage} from '../index'
import {NonExistent} from '../../components'

export default function Admision(){
    const {subpage} = useParams()

    const subpagesAdmision = {
        "requisitos" : <RequisitosPage />,
        "pensiones" : <PensionesPage />
    }

    if(! subpagesAdmision[subpage]) return  <NonExistent />
    return(
        <>
            {subpagesAdmision[subpage]}
        </>
        
    )
}