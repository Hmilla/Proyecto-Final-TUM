import { Container, Image, Title } from "../../../components";
import Local1 from "../../../assets/nuestrocolegio/local/Local1.jpg";
import Local2 from "../../../assets/nuestrocolegio/local/Local2.jpg";
import Local3 from "../../../assets/nuestrocolegio/local/Local3.jpeg";
import Local4 from "../../../assets/nuestrocolegio/local/Local4.jpg";
import Local5 from "../../../assets/nuestrocolegio/local/Local5.jpg";

export default function NuestroLocal() {
  return (
    <>
      <Title title="Nuestro Local" className="bg-google-green" />
      <Container>
        <p className="text-lg font-medium mb-6">
          Contamos con un local de uso exclusivo para el Colegio en donde funcionan los niveles de Inicial y primaria:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="col-span-2 row-span-2">
            <Image src={Local3} description="Fachada Colegio" />
          </div>
          <div className="row-span-2">
            <Image src={Local4} description="Local 4" />
          </div>
          <div className="row-span-2">
            <Image src={Local2} description="Local 2" />
          </div>
          <div className="col-span-2">
            <Image src={Local5} description="Local 5" />
          </div>
          <div className="col-span-2">
            <Image src={Local1} description="Local 1" />
          </div>
        </div>
      </Container>
    </>
  );
}
