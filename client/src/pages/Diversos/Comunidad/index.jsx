import { Container, Image, Title } from "../../../components"
import ComunidadEscolar from "../../../assets/diversos/ComunidadEscolar.png"

export default function Comunidad(){
    return(
        <>
            <Title title="Comunidad" className="bg-gray-700"/>
            <Container>
                <Image src={ComunidadEscolar} description="Comunidad Escolar"/>
            </Container>
        </>
    )
}