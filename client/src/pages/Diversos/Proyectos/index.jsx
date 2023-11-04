import { Container, Image, Title } from "../../../components"
import Concytec from "../../../assets/diversos/Concytec.png"

export default function Proyectos(){
    return(
        <>
            <Title title="Proyectos" className="bg-gray-700"/>
            <Container>
                <p className="font-semibold text-xl mb-4">Proyectos del Consytec:</p>
                <Image src={Concytec} description="Concytec"/>
            </Container>
        </>
    )
}