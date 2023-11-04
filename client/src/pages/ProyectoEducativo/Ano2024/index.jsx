import {Container, Title} from '../../../components'
import CalendarioTUMSchool from '../../../assets/proyectoeducativo/CalendarioTUMSchool.jpg'

export default function Ano2023(){
    return(
        <>
          <Title title="Año escolar 2023" className="bg-google-red"/>
            <Container>
            <img src={CalendarioTUMSchool} className="w-full"/>
            </Container>
        </>
        
    )
}