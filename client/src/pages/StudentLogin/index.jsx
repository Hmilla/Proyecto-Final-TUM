import {LoginComponent} from '../../components'
import { findStudent } from "../../utils";
import { useSelector } from "react-redux/es/hooks/useSelector"
import { userSelector } from "../../selectors/userSelector"
import { Navigate } from 'react-router-dom';
  

export default function StudentLogin(){
    const user = useSelector(userSelector)
    if(user && user.role == "student") return <Navigate to="/student" />
    return<>
        <LoginComponent role="student" find={findStudent} />
    </>
}