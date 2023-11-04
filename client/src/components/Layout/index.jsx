import {
  AiOutlineMenu,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaTiktok, FaSignInAlt } from "react-icons/fa";
import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import logo from "../../assets/TUMSchool-logo.png";
import { ItemHeader } from "../index.js";


export default function Layout() {
  const listHeader = {
    "Nuestro Colegio": [
      "Bienvenida",
      "Nuestros Objetivos",
      "Nuestros Principios pedagógicos",
      "Nuestro local",
      "Afiliaciones",
    ],
    Admisión: [
      "Requisitos",
      "Pensiones",
      [
        "Solicita una Cita y Visita Guiada",
        "https://docs.google.com/forms/d/e/1FAIpQLSc9UfsNGws1FInzXBoLikUqdZ37Ws2Iln70_A86H531_3U9Mg/viewform",
      ],
      [
        "Formulario de inscripción",
        "https://docs.google.com/forms/d/e/1FAIpQLSf7b8NETXUgPTPE6Ws0q4mzvM-85_Z_0O_lnKkZag3cjqVl0w/viewform?usp=sharing ",
      ],
    ],
    "Proyecto Educativo": [
      "Año Escolar 2023",
      "Metodología",
      "Niveles",
      "Apoyo Psicológico",
      "Talleres",
    ],
    Diversos: ["Blog", "Comunidad", "Proyectos"],
  };

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-blue-900 lg:py-2">
        <div className="flex flex-col gap-5 items-center md:px-10 lg:flex-row">
          <div className="flex items-center justify-between w-[80%] sm:w-[65%] md:w-auto ">
            <Link to="/">
              <img src={logo} alt="" className="h-28 sm:h-32 lg:mr-10" />
            </Link>

            <div
              onClick={toggleNavbar}
              className={`${
                isOpen ? "ring ring-blue-300 shadow-md bg-blue-500" : ""
              }  p-2 rounded md:hidden text-white text-3xl sm:text-4xl hover:bg-black/25 cursor-pointer`}
            >
              <AiOutlineMenu />
            </div>
          </div>

          <div
            className={` ${
              isOpen ? "flex" : "hidden"
            } flex-col p-4 my-4 md:flex  bg-black/40  w-[80%] border-green-600 transition duration-300 md:bg-transparent md:p-0 md:flex-row md:items-center md:justify-between md:w-full lg:flex-1`}
          >
            {Object.keys(listHeader).map((item) => {
              return (
                <ItemHeader
                  key={item}
                  item={item}
                  list_values={listHeader[item]}
                />
              );
            })}
            <div className="px-1 cursor-pointer">
              <Link
                to="/login"
                className="hover:bg-blue-500 text-white font-semibold text-base px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <FaSignInAlt />
                <p>Login</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
      <div className="bg-blue-900 px-4 pt-5 text-white ">
        {location.pathname === "/" && (
          <>
            <div className="flex flex-col sm:flex-row sm:justify-between w-[70%] m-auto py-10">
              <div className="mb-6 md:mb-0 flex flex-col gap-2">
                <p className="text-3xl mb-4">Contáctenos </p>
                <div className="me-3 contacto disappear pb-1">
                  <p>
                    Teléfono: <a href="#"> 922794600 </a>
                  </p>
                </div>
                <div>
                  <p>
                    Celular:{" "}
                    <a href="https://wa.me/+51979979031" target="__blank">
                      979 979 031
                    </a>
                  </p>
                </div>
                <div>
                  <p>
                    Email:{" "}
                    <a href="mailto:tums.school@gmail.com">
                      tums.school@gmail.com
                    </a>
                  </p>
                </div>
                <div>
                  <p>
                    Dirección:{" "}
                    <a
                      href="https://maps.app.goo.gl/ccxb1tfBoq6d7sDQ6"
                      target="_blank"
                    >
                      Av Alipio Ponce Mz Ñ Lt 49-50, San Martín de Porres 15113
                    </a>
                  </p>
                </div>

                <div className="flex gap-10 text-2xl mt-5">
                  <a
                    className="rounded-full p-2 border bg-blue-800 text-white hover:bg-blue-600"
                    href="https://www.instagram.com/tum_school"
                    target="_blank"
                  >
                    <AiOutlineInstagram />
                  </a>
                  <a
                    className="rounded-full p-2 border bg-blue-800 text-white hover:bg-blue-600"
                    href="http://www.facebook.com/tums.school"
                    target="_blank"
                  >
                    <AiOutlineFacebook />
                  </a>
                  <a
                    className="rounded-full p-2 border bg-blue-800 text-white hover:bg-blue-600"
                    href="https://www.tiktok.com/@tumschool"
                    target="_blank"
                  >
                    <FaTiktok />
                  </a>
                </div>
              </div>
              <div>
                <p className="text-3xl mb-4"> Horario de atención </p>
                <div className="flex flex-col items-center">
                  <p>lun: 8:00 a. m. – 5:00 p. m.</p>
                  <p>mar: 8:00 a. m. – 5:00 p. m.</p>
                  <p>mié: 8:00 a. m. – 5:00 p. m.</p>
                  <p>jue: 8:00 a. m. – 5:00 p. m.</p>
                  <p>vie: 8:00 a. m. – 5:00 p. m.</p>
                  <p>sáb: 8:00 a. m. – 1:00 p. m.</p>
                  <p>dom: Cerrado</p>
                </div>
              </div>
            </div>

            <hr className="border-t border-gray-300/50 my-4" />
          </>
        )}

        <div className="flex items-center justify-center mb-3">
          <p className="text-gray-300/50 text-xs">
            Tum School Perú | Desarrollado por Héctor Milla
          </p>
        </div>
      </div>
    </div>
  );
}
