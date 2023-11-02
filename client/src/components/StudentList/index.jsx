import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
  } from "react-admin";
  
  const StudentList = (props) => {
    return (
      <List {...props}>
        <Datagrid>
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="email" />
          <TextField source="class" />
          <TextField source="password" />
          <EditButton basePath="/students" />
          <DeleteButton basePath="/students" />
        </Datagrid>
      </List>
    );
  };
  
  export default StudentList;
  