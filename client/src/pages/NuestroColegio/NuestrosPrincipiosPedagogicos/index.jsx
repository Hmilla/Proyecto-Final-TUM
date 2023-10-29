import { Container, Title } from "../../../components";

export default function NuestrosPrincipiosPedagogicos() {
  const nuestrosPrincipiosPedagogicos = [
    `Incentivar y fomentar la curiosidad y las ganas de adquirir nuevos
        conocimientos, así como aprender a disfrutar los éxitos logrados en
        el aprendizaje.`,
    `Garantizar una educación orientada hacia el alumno, estimulante y
        variada, en lo que respecta a la metodología utilizada.`,
    `Fomentar la autodisciplina y la responsabilidad.`,
    `Despertar la conciencia y la preocupación por el bienestar y la
        dignidad del ser humano.`,
    `Ofrecer un plan de estudios moderno y completo que refleje el perfil
        del colegio TUM School.`,
    `Desarrollar una conciencia social e incentivar responsabilidad hacia
        ella.`,
    `Concebir al colegio TUM School como una comunidad educativa y de
        convivencia, compuesta básicamente por alumnos, profesores y padres
        de familia.`,
    `Desarrollar una perspectiva intercultural.`,
  ];

  return (
    <>
      <Title
        title="Nuestros Principios Pedagogicos"
        className="bg-google-green"
      />
      <Container>
        <ol className="list-decimal">
          {nuestrosPrincipiosPedagogicos.map((value) => (
            <li key={value} className="mb-2 text-base sm:text-lg">
              <p> {value} </p>
            </li>
          ))}
        </ol>
        <p className="text-base sm:text-lg">
          Estos principios y metas educativas del colegio corroboran la visión
          del marco dentro del cual se seguirá desarrollando el colegio TUM
          School en un futuro, para mantener así su posición de liderazgo en la
          sociedad de San Martín de Porres. El elemento central del desarrollo
          será el dictado de clases por seccion, cuya meta será mejorar el
          rendimiento académico de los alumnos, así como fortalecer la
          personalidad de cada uno de ellos.
        </p>
      </Container>
    </>
  );
}
