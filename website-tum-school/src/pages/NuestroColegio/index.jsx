import { useParams } from "react-router-dom";
import {
  Afiliaciones,
  Bienvenida,
  NuestrosObjetivos,
  NuestroLocal,
  NuestrosPrincipiosPedagogicos,
} from "../index";

export default function NuestroColegio() {
  const { subpage } = useParams();

  const NuestroColegio = {
    afiliaciones: <Afiliaciones />,
    bienvenida: <Bienvenida />,
    nuestrosobjetivos: <NuestrosObjetivos />,
    nuestrolocal: <NuestroLocal />,
    nuestrosprincipiospedagogicos: <NuestrosPrincipiosPedagogicos />,
  };

  return <>{NuestroColegio[subpage]}</>;
}
