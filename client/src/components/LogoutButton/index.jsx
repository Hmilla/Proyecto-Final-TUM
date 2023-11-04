import { Link } from "react-router-dom";

export default function LogoutButton() {
  return (
    <div className="flex justify-end">
      <Link to="/">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2 mt-2">
          Logout
        </button>
      </Link>
    </div>
  );
}
