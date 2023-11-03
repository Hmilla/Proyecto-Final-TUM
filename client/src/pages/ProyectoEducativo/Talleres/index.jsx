import { Container, Image, Title } from "../../../components";
import Teatro from "../../../assets/proyectoeducativo/Teatro.jpg";
import Festividades from "../../../assets/proyectoeducativo/Festividades.jpg";
import Musica from "../../../assets/proyectoeducativo/Musica.jpg";
import Deporte from "../../../assets/proyectoeducativo/Deporte.jpg";
import Danzas from "../../../assets/proyectoeducativo/Danzas.jpg";

export default function Talleres() {
  return (
    <>
      <Title title="Talleres" className="bg-google-red" />
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-2xl">
          <div className="flex flex-col items-center">
            <p className="mb-2">Danza</p>
            <Image src={Danzas} />
          </div>
          <div className="flex flex-col items-center">
            <p className="mb-2">Teatro</p>
            <Image src={Teatro} />
          </div>
          <div className="flex flex-col items-center">
            <p className="mb-2">Musica</p>
            <Image src={Musica} />
          </div>
          <div className="flex flex-col items-center">
            <p className="mb-2">Deporte</p>
            <Image src={Deporte} />
          </div>
          <div className="flex flex-col items-center">
            <p className="mb-2">Festividades</p>
            <Image src={Festividades} />
          </div>
        </div>
      </Container>
    </>
  );
}
