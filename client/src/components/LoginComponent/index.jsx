import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { saveUser } from "../../slices/userSlice";
import { Form } from "..";
import { inputs } from "./form";
import { useForm } from "../../hooks/useForm";
import { Button } from "../../components";

export default function LoginComponent({ role, find }) {
  const { values, errors, handleInputChange, validateIfValuesHasEmpty } =
    useForm({
      email: "",
      password: "",
    });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateIfValuesHasEmpty()) return;

    const user = await find("email", values.email);
    if (!user) {
      Swal.fire({
        icon: "error",
        text: "Email y/o password incorrecto",
      });
      return;
    }
    if (user.password !== values.password) {
      Swal.fire({
        icon: "error",
        text: "Email y/o password incorrecto",
      });
      return;
    }
    dispatch(saveUser({ ...user, role }));
    navigate(`/admin`);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="flex items-center">
        <p>No eres "{role}"? </p>
        <Link to="/login">
          <Button text="Regresar" variant="secondary" />
        </Link>
      </div>
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-4">Login</h1>
        <p className="text-gray-600 mb-8">
          Welcome back, {role}! Inicia sesión
        </p>
        <Form
          inputs={inputs}
          values={values}
          errors={errors}
          textButton="Iniciar Sesión"
          handleFormSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
}
