import { Admin, Resource } from "react-admin";
import { Navigate } from "react-router-dom";

import simpleRestProvider from 'ra-data-simple-rest'
import { useSelector } from "react-redux/es/hooks/useSelector";
import { userSelector } from "../../selectors/userSelector";
import {
   AdminList,
   AdminCreate,
   AdminEdit,
   StudentList,
   StudentCreate,
   StudentEdit,
   TeacherCreate,
   TeacherList,
   TeacherEdit,
 } from "../../reactAdmin";

export default function AdminPage() {

  const dataProvider = simpleRestProvider('http://localhost:3002');

  const user = useSelector(userSelector);

  if (!user || user.role !== "admin") return <Navigate to="/login/admin" />;

  return (
    <>
      <Admin basename="/admin" dataProvider={dataProvider}>
        <Resource
          name="teachers"
          list={TeacherList}
          create={TeacherCreate}
          edit={TeacherEdit}
        />
        <Resource
          name="students"
          list={StudentList}
          create={StudentCreate}
          edit={StudentEdit}
        />
          <Resource
          name="admins"
          list={AdminList}
          create={AdminCreate}
          edit={AdminEdit}
        />  
      </Admin>
    </>
  );
}
