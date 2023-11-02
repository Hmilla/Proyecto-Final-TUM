import { useSelector } from "react-redux/es/hooks/useSelector"
import { userSelector } from "../../selectors/userSelector"
import { Navigate } from "react-router-dom"

export default function Student(){
    const user = useSelector(userSelector)
    if(!user || user.role !== "student") return <Navigate to="/login/student" />

    return(
        <>
            welcome {user.name}
        </>
    )
}