import { Form } from "..";
import { inputs } from "./form";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { saveUser } from "../../slices/userSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function LoginComponent({ role, find }) {
  const { values, errors, handleInputChange, validateIfValuesHasEmpty } = useForm({
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

    // el usuario existe, hay que comparar la contraseña
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
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4 mb-4">
          Regresar
        </button>
      </Link>
      </div>
      

      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-4">Login</h1>
        <p className="text-gray-600 mb-8">Welcome back, {role}! Inicia sesión</p>
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
