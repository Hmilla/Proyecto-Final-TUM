import { Container, Title } from "../../../components";

export default function Talleres() {
  return (
    <>
      <Title title="Talleres" className="bg-google-red" />
      <Container>
        <div className="text-2xl flex flex-col gap-3">
        <p> Danza </p>

        <p>Teatro </p>

        <p>Minichef </p>

        <p>Deporte </p>

        <p>Festividades </p>
        </div>
        
      </Container>
    </>
  );
}
