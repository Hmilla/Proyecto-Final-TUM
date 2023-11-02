import { Container, Title } from "../../../components";

export default function Niveles() {
  return (
    <>
      <Title title="Niveles" className="bg-google-red" />
      <Container>
        <blockquote className="text-xl italic border-l-4 border-gray-500 pl-4 py-2 mb-2">
          “Nada más enciende la mente de un niño como jugar”
          <footer className="text-sm text-gray-600">Dr. Stuart Brown</footer>
        </blockquote>
        <h2 className="text-2xl mb-2">Inicial</h2>

        <div className="mb-8">
            <div className="flex flex-col gap-1 text-parrafo-gray">
            <p>El nivel inicial tiene las aulas de 3, 4 y 5 años. </p>
          <p>
            Tenemos el espacio necesario y el equipo humano ideal para el
            desarrollo de nuestros alumnos.
          </p>
          <p>
            El horario del nivel inicial es de lunes a viernes, ingresan entre
            las 08:00 y 8:30 am y la Salida: a las 12:30 y 1:00 h{" "}
          </p>
            </div>
          
          <h3 className="text-xl font-semibold my-3">Propuesta pedagógica </h3>
          <p className="text-parrafo-gray">
            Nos enfocamos en la formación del niño con el juego, la exploración,
            el descubrimiento, la estimulación sensorio-motriz y la formación de
            hábitos como cimiento para el desarrollo del potencial cognitivo,
            afectivo y social, teniendo como fundamento el respeto a la
            singularidad de cada niño reconociendo en cada uno sus
            características, intereses y ritmos de aprendizaje.{" "}
          </p>
          <h3 className="text-xl font-semibold my-3">Asignaturas </h3>
          <p className="text-parrafo-gray">
            Matemáticas, Comunicación, Personal Social, Ciencia y Tecnología,
            Psicomotricidad, Música, Inglés{" "}
          </p>
        </div>

        <h2 className="text-2xl mb-2">Primaria</h2>
        <div>
        <div className="flex flex-col gap-1 text-parrafo-gray">
          <p>El nivel primario comprende las secciones de 1º a 6º grado </p>
          <p>
            El horario del nivel primaria es de lunes a viernes, ingresan entre
            las 08:00 am y la Salida: a las 1:30 h{" "}
          </p>
          <p>
            Brindamos educación personalizada aulas de 10 a 15 alumnos como
            máximo.
          </p>
          </div>
          <h3 className="text-xl font-semibold my-3">Propuesta pedagógica </h3>
          <p className="text-parrafo-gray">
            Estimulamos dinámicamente el desarrollo integral de nuestros
            estudiantes y está centrada en el alumno como persona.{" "}
          </p>
          <p className="text-parrafo-gray">
            Priorizamos el desarrollo de habilidades clave de pensamiento,
            investigación, comunicación, sociales y de autogestión, es decir,
            indagadores, pensadores, tomadores de riesgos, solidarios y
            comunicadores. En nuestro mundo cada vez más globalizado, estas
            habilidades y atributos son esenciales para convertirse en
            estudiantes exitosos de por vida.{" "}
          </p>
          <h3 className="text-xl font-semibold my-3">Asignaturas </h3>
          <p className="text-parrafo-gray">
            Matemáticas, Comunicación, Personal Social, Ciencia y Tecnología,
            Arte, Música, Inglés, Deporte, Educación religiosa*, Tutoría
          </p>
        </div>
      </Container>
    </>
  );
}
