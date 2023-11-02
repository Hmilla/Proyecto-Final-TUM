import {LoginComponent} from '../../components'
import { findTeacher } from "../../utils";
import { useSelector } from "react-redux/es/hooks/useSelector"
import { userSelector } from "../../selectors/userSelector"
import { Navigate } from 'react-router-dom';
  

export default function TeacherLogin(){
    const user = useSelector(userSelector)
    if(user && user.role == "teacher") return <Navigate to="/teacher" />
    return<>
        <LoginComponent role="teacher" find={findTeacher} />
    </>
}