import {Container,Image, Title} from '../../../components'
import Metodologia1 from '../../../assets/proyectoeducativo/Metodologia1.jpg'
import Metodologia2 from '../../../assets/proyectoeducativo/Metodologia2.jpg'


export default function Metodologia(){
    return(
        <>
            <Title title="Metodología" className="bg-google-red"/>
            <Container>
                <div className="justify-between lg:flex">
                <div className="text-parrafo-gray text-base md:text-lg lg:w-[60%] flex flex-col gap-4">
                <p>
                    TUM School se enfoca en los aprendizajes que se espera logren los estudiantes como resultado de su formación, fomenta los valores y la educación ciudadana de los estudiantes para poner en ejercicio sus derechos y deberes, así como el desarrollo de competencias que les permitan responder a las demandas de nuestro tiempo apuntando al desarrollo sostenible, asociadas al manejo del inglés, la educación para el trabajo y las TIC, además de apostar por una formación integral que fortalezca los aprendizajes vinculados al arte y la cultura, la educación física para la salud, en una perspectiva intercultural, ambiental e inclusiva que respeta las características de los estudiantes, sus intereses y aptitudes. 
                </p>
                <p> Brinda educación personalizada aulas de 10 a 15 alumnos como máximo. </p>
                <p>
                    Da charlas de Formación de la Familia, ya es necesario que los padres cuenten con criterios claros que los ayuden a cumplir el rol de primeros educadores de sus hijos. 
                </p>
                </div>
                
                
                <div className="lg:w-[30%]">
                <Image src={Metodologia1} description = "FODA familiar" className="mt-5 lg:mt-0"/>
                <Image src={Metodologia2} description= "Organización"/>
                </div>
                </div>
                

                

            </Container>
        </>
    )
}