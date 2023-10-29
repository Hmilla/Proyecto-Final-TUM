import { useParams } from "react-router-dom";
import {
  AfiliacionesPage,
  BienvenidaPage,
  NuestrosObjetivosPage,
  NuestroLocalPage,
  NuestrosPrincipiosPedagogicosPage,
} from "../index";

export default function NuestroColegio() {
  const { subpage } = useParams();

  const NuestroColegio = {
    afiliaciones: <AfiliacionesPage />,
    bienvenida: <BienvenidaPage />,
    nuestrosobjetivos: <NuestrosObjetivosPage />,
    nuestrolocal: <NuestroLocalPage />,
    nuestrosprincipiospedagogicos: <NuestrosPrincipiosPedagogicosPage />,
  };

  return <>{NuestroColegio[subpage]}</>;
}
