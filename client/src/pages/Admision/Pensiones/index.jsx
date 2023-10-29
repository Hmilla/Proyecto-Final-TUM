import { Container, Title } from "../../../components";

export default function Pensiones() {
  return (
    <>
      <Title title="Pensiones" className="bg-google-blue" />
      <Container>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-300 text-left">Nivel</th>
                <th className="px-6 py-3 bg-gray-300 text-left">Matrícula (S/)</th>
                <th className="px-6 py-3 bg-gray-300 text-left">Pensión (S/)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100">
                <td className="px-6 py-4 bg-gray-200">Inicial</td>
                <td className="px-6 py-4">250</td>
                <td className="px-6 py-4">250</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="px-6 py-4 bg-gray-200">Primaria</td>
                <td className="px-6 py-4">280</td>
                <td className="px-6 py-4">280</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
}
