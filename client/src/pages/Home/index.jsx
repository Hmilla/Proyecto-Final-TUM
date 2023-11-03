import { Slider, Image } from "../../components";
import Local1 from "../../assets/nuestrocolegio/local/Local1.jpg";
import Local2 from "../../assets/nuestrocolegio/local/Local2.jpg";
import Local3 from "../../assets/nuestrocolegio/local/Local3.jpeg";
import Local4 from "../../assets/nuestrocolegio/local/Local4.jpg";
import Local5 from "../../assets/nuestrocolegio/local/Local5.jpg";
import Local6 from "../../assets/nuestrocolegio/local/Local6.jpg";
import Teatro from "../../assets/proyectoeducativo/Teatro.jpg";
import Festividades from "../../assets/proyectoeducativo/Festividades.jpg";
import Musica from "../../assets/proyectoeducativo/Musica.jpg";
import Deporte from "../../assets/proyectoeducativo/Deporte.jpg";
import Danzas from "../../assets/proyectoeducativo/Danzas.jpg";
import { useDispatch } from "react-redux";
import { clearUser } from "../../slices/userSlice";
import Mapa from "../../assets/Mapa.jpg";

export default function Home() {
  const slides = [
    {
      url: Local1,
    },
    {
      url: Local2,
    },
    {
      url: Local3,
    },
    {
      url: Local4,
    },
    {
      url: Local5,
    },
    {
      url: Local6,
    },
  ];
  const dispatch = useDispatch();
  dispatch(clearUser());

  return (
    <div className="bg-gray-200">
      <blockquote className="text-3xl text-center italic bg-gray-100 p-4 m-4 relative">
        TUM School:{" "}
        <span className="text-blue-700 font-semibold relative">
          Talentos Únicos del Mañana
          
        </span>
        <span className="absolute bottom-0 left-1/2 w-1/2 transform -translate-x-1/2 border-b-4 border-black/50"></span>
      </blockquote>
      <p className="text-3xl font-bold text-center bg-gray-700 text-white p-2">Galería</p>
      <Slider slides={slides} />
      <p className="text-3xl font-bold text-center bg-gray-700 text-white p-2">Talleres</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-2xl my-5 px-4">
          <div className="flex flex-col items-center">
            <p className="mb-2 font-semibold">Danza</p>
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
      <p className="text-3xl font-bold text-center bg-gray-700 text-white p-2">Pedir Cita</p>
      <div className=" p-4 text-center">
        <p className="text-2xl font-semibold">
          Education Center en San Martín de Porres
        </p>
        <p className="text-lg">Abrimos a las 08:00</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc9UfsNGws1FInzXBoLikUqdZ37Ws2Iln70_A86H531_3U9Mg/viewform"
          target="_blank"
          className="bg-blue-500 text-white text-lg font-semibold px-4 py-2 rounded mt-4 inline-block hover:bg-blue-600 transition duration-300"
        >
          Pedir una Cita
        </a>
      </div>

      <p className="text-3xl font-bold text-center bg-gray-700 text-white p-2">Mapa</p>
      <div className="flex justify-center">
      <img src={Mapa} className="md:w-[70%]"/>
      </div>
      
    </div>
  );
}
