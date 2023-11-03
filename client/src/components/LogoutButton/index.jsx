import { Link } from "react-router-dom"

export default function LogoutButton(){
    return(
        <div className="flex justify-end">
        <Link to="/">
          <div className="text-red-500 p-2 rounded inline-block hover:underline">
            Logout
          </div>
        </Link>
      </div>
    )
}