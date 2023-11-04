import { Container, Image, Title } from "../../../components";
import Psicologia from "../../../assets/proyectoeducativo/Psicologia.png";

export default function ApoyoPsicologico() {
  return (
    <>
      <Title title="Apoyo Psicológico" className="bg-google-red" />
      <Container>
        <div className="lg:flex gap-5">
          <div>
            <p className="text-parrafo-gray">
              Tiene la misión de contribuir en el desarrollo integral de
              nuestros alumnos en un trabajo coordinado con la Dirección,
              docentes y familias. De acuerdo con un cronograma se brinda en las
              tardes asesorías o charlas a Padres con hijos.
            </p>
            <h2 className="text-xl mt-4 mb-2" >Formación de la Familia</h2>
            <p className="text-parrafo-gray">
              La formación de los hijos, además de ser un arte, es también una
              ciencia que puede y debe aprenderse. En la sociedad actual, es
              necesario que los padres cuenten con criterios claros que los
              ayuden a cumplir el rol de primeros educadores de sus hijos.
            </p>
          </div>
          <Image src={Psicologia} description="Psicología educativa" className="mt-5 lg:mt-0"/>
        </div>
      </Container>
    </>
  );
}
