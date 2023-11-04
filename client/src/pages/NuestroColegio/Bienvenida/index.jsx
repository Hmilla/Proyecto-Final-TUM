import { Container, Image, Title } from "../../../components";
import TUMDireccion from "../../../assets/nuestrocolegio/TUMDireccion.jpg";

export default function Bienvenida() {
  return (
    <div>
      <div>
        <Title className="bg-google-green" title="Bienvenida" />
      </div>
      <Container>
        <h2 className="text-3xl pb-6 sm:text-4xl">
          TUM School : Talentos Únicos del Mañana
        </h2>
        <div className=" flex flex-col gap-6 lg:flex-row">
          <div className="text-parrafo-gray text-base sm:text-lg lg:w-[65%]">
            <p className="pb-2">¡Reciban la más cordial bienvenida!</p>
            <p>
              Nuestra propuesta educativa está centrada en el desarrollo del de
              talento único del alumno, por ello todas las actividades están
              enfocadas en lograr su desarrollo integral con el compromiso del
              personal de la institución con la familia. TUM School es un lugar
              donde los alumnos aprenden a vivir en sociedad, desarrollando su
              capacidad creativa e innovadora, busca la socialización y cultiva
              la interculturalidad, la parte académica, deportiva y artística
              Buscamos que nuestros alumnos sean protagonistas de su propio
              aprendizaje, enseñándoles que, es a través del trabajo, el mejor
              modo de aprender y de crecer como personas, poniendo en juego una
              serie de virtudes humanas.
            </p>
          </div>
          <Image className="lg:w-[45%]" src={TUMDireccion} description="Cuerpo docente" />
        </div>
      </Container>
    </div>
  );
}
