import { useParams } from "react-router-dom";
import {
  AfiliacionesPage,
  BienvenidaPage,
  NuestrosObjetivosPage,
  NuestroLocalPage,
  NuestrosPrincipiosPedagogicosPage,
  NonExistent
} from "../index";

export default function NuestroColegio() {
  const { subpage } = useParams();

  const subpagesNuestroColegio = {
    afiliaciones: <AfiliacionesPage />,
    bienvenida: <BienvenidaPage />,
    nuestrosobjetivos: <NuestrosObjetivosPage />,
    nuestrolocal: <NuestroLocalPage />,
    nuestrosprincipiospedagogicos: <NuestrosPrincipiosPedagogicosPage />,
  };

  if(! subpagesNuestroColegio[subpage]){
    return (
        <>
            <NonExistent />
        </>
    )
}

  return <>{subpagesNuestroColegio[subpage]}</>;
}
