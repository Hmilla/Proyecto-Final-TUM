import logo from "../../assets/TUMSchool-logo.png";
import { ItemHeader } from "../index.js";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import {Outlet} from 'react-router-dom'


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
      "Solicita una Cita y Visita Guiada",
      "Formulario de inscripción",
    ],
    "Proyecto Educativo": [
      "Año Escolar 2024",
      "Metadología",
      "Niveles",
      "Apoyo Psocológico",
      "Talleres",
    ],
    Diversos: ["Blog", "Comunidad", "Proyectos"],
  };


  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = ()=>{
    setIsOpen(!isOpen)
  }

  return (
    <>
        <div className="bg-blue-900 overflow-x-hidden md:overflow-visible lg:py-2 ">
      <div className="container">
        <div className="flex flex-col items-center w-screen md:px-10 lg:flex-row">
          <div className="flex items-center justify-between w-[80%] sm:w-[65%] md:w-auto">
            <img src={logo} alt="" className="h-32 lg:mr-20" />
            <div
              onClick={toggleNavbar}
              className={`${isOpen? "ring ring-blue-300 shadow-md bg-blue-500":""}  p-2 rounded md:hidden text-white text-4xl hover:bg-black/25 cursor-pointer`} 
            >
              <AiOutlineMenu/>
            </div>
          </div>
            
              <div

                className={` ${isOpen? "flex" : "hidden"} flex-col p-4 my-4 md:flex  bg-black/40  w-[80%] sm:w-[65%] md:bg-transparent md:p-0 md:flex-row md:items-center md:justify-between md:w-full lg:flex-1 transiton duration-300`}
              >
                {Object.keys(listHeader).map((item) => {
                  return (
                    <ItemHeader
                      item={item}
                      list_values={listHeader[item]}
                    />
                  );
                })}
                <div className="px-1 cursor-pointer">
                  <p className="text-white capitalize font-semibold text-base">login</p>
                </div>
              </div>
        </div>
      </div>
    </div>
    <div>
        <Outlet />
    </div>
    
    </>
    
  );
}