import { Container, Image, Title } from "../../../components";
import TUMValores from "../../../assets/nuestrocolegio/TUMValores.jpg"
import TUMReciclaje from "../../../assets/nuestrocolegio/TUMReciclaje.jpg"

export default function NuestrosObjetivos() {
  const nuestrosObjetivos = {
    "Vision 👀": `Lograr que los niños transformen su futuro y el de
      la humanidad con respeto mutuo y del medio ambiente`,
    "Mision 🎯": `Crear una generación de líderes con alto rendimiento,
       integrando la tecnología de manera natural al currículum
       de los estudiantes con el finde potenciar las habilidades
       propias de la era digital`,
    "Nuestros Valores 🌼": {
      Respeto: `Tratamos a las personas, al mundo que nos rodea y a
        nosotros mismos con dignidad y cuidado.`,
      Integridad: `Somos honestos, justos
        y dignos de confianza tanto en palabras como en acciones.`,
      Compromiso: `Cumplimos nuestras responsabilidades y objetivos con iniciativa,
        entusiasmo y perseverancia.`,
      "Empatía": `Entendemos los sentimientos y
      razonamientos de los demás y actuamos con solidaridad.`,
      "Trato familiar": `Toda la comunidad educativa es una familia y la familia es el núcleo 
      de la sociedad escolar`,
      Interculturalidad: `Siendo el Perú tan rico en culturas, se
      expande con Latinoamérica y el mundo, cultivamos la interacción entre dos
      o más culturas.`,
    },
  };

  const renderValue = (value) => {
    if (typeof value === "object") {
      return Object.keys(value).map((key) => (
        <div key={key} className="ml-4">
            <h3 className="pt-3 text-lg font-semibold">{key}</h3>
            <p className="ml-4 text-parrafo-gray" >{value[key]}</p>
        </div>
      ));
    }
    return <p className="ml-4 text-parrafo-gray">{value}</p>;
  };
  return (
    <>
      <Title title="Nuestros Objetivos" className="bg-google-green" />
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="lg:w-[60%]">
          {Object.entries(nuestrosObjetivos).map(([key, value]) => (
          <div key={key} className="pb-5">
            <h2 className="text-xl">{key}</h2>
            {renderValue(value)}
          </div>
        ))}
          </div>
          <div className= "flex flex-col gap-4 lg:w-[40%] ">
          <Image src={TUMValores} description="Fiestas Patrias TUM School"/>
          <Image src={TUMReciclaje} description="Reciclaje TUM School"/>
          </div>
        </div>
      </Container>
    </>
  );
}
