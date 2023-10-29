import { Container, Image, Title } from "../../../components"
import KURA1 from "../../../assets/nuestrocolegio/Afiliaciones/KURA1.jpg"
import KURA2 from "../../../assets/nuestrocolegio/Afiliaciones/KURA2.jpg"
import KURA3 from "../../../assets/nuestrocolegio/Afiliaciones/KURA3.jpg"
import KURA4 from "../../../assets/nuestrocolegio/Afiliaciones/KURA4.jpg"
export default function Afiliaciones(){
    return(
        <>
            <Title title="Afiliaciones" className="bg-google-green"/>
            <Container>
                <p className="mb-4 sm:text-lg"> Convenio con la Clínica KURA para que tengan tarifas especiales en todos los servicios que brinda la Clínica</p>
                <div >
                    <div className="md:flex gap-4">
                    <Image src={KURA1} className="mb-4"/>
                    <Image src={KURA2} className="mb-4"/>
                    </div>
                    <div className="md:flex gap-4">
                    <Image src={KURA3} className="mb-4"/>
                    <Image src={KURA4} className="mb-4"/>
                    </div>
                    
                </div>
            </Container>
        </>
        
        
    )
}