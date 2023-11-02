import { Link } from "react-router-dom";
export default function Login(){

    return (
        <div className="flex flex-col items-center justify-center h-screen relative">
          <Link to="/" className="absolute top-0 left-0 m-4 text-green-600 hover:underline">
            <p className="font-bold">Home</p>
          </Link>
          <h2 className="text-3xl mb-4">¿Qué eres?</h2>
          <div className="flex flex-col md:flex-row">
            <Link to="admin" className="text-blue-600 hover:underline mb-2 md:mr-4 md:mb-0">
              <p>Admin</p>
            </Link>
            <Link to="teacher" className="text-blue-600 hover:underline mb-2 md:mr-4 md:mb-0">
              <p>Teacher</p>
            </Link>
            <Link to="student" className="text-blue-600 hover:underline">
              <p>Student</p>
            </Link>
          </div>
        </div>
      );
      
      
      
}