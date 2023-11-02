import {LoginComponent} from '../../components'
import { findAdmin } from "../../utils";
import { useSelector } from "react-redux/es/hooks/useSelector"
import { userSelector } from "../../selectors/userSelector"
import { Navigate } from 'react-router-dom';
  

export default function AdminLogin(){
    const user = useSelector(userSelector)
    if(user && user.role == "admin") return <Navigate to="/admin" />
    return<>
        <LoginComponent role="admin" find={findAdmin} />
    </>
}