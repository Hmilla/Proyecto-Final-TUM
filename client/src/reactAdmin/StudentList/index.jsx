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
          <TextField source="clase" />
          <TextField source="password" />
          <EditButton basepath="/students" />
          <DeleteButton basepath="/students" />
        </Datagrid>
      </List>
    );
  };
  
  export default StudentList;
  