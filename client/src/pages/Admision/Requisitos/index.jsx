import { Title, Container } from "../../../components";

export default function Requisitos() {
  return (
    <>
      <Title title="Requisitos" className="bg-google-blue" />

      <Container>
        <p className="text-base font-semibold mb-5 sm:text-lg">
          Alumnos que ya han estudiado en el sistema Educativo Peruano{" "}
        </p>

        <ul className="list-disc list-inside text-base sm:text-lg flex flex-col gap-1">
          <li>Copia del Documento de Identidad del menor </li>
          <li>
            Ficha Única de Matricula con código del Educando impresa del SIAGIE.{" "}
          </li>

          <li>Certificado de Estudios del año anterior </li>

          <li>Certificado de no Adeudo del colegio de procedencia </li>

          <li>Copia del Documento de los Padres </li>

          <li>
            Copia de Recibo de servicio (agua, luz, teléfono) que indique
            dirección de Residencia{" "}
          </li>
        </ul>

        <p className="text-base font-semibold mb-5 mt-5 sm:text-lg">
          Alumnos que no han estudiado antes{" "}
        </p>

        <ul className="list-disc list-inside text-base sm:text-lg flex flex-col gap-1">
          <li>Copia del Documento de Identidad del menor</li>
          <li>Copia del Documento de los Padres </li>
          <li>
            Copia de Recibo de servicio (agua, luz, teléfono) que indique
            dirección de Residencia{" "}
          </li>
        </ul>
      </Container>
    </>
  );
}
