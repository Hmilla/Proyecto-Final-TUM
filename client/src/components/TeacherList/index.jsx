import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  SelectField,
} from "react-admin";

const TeacherList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="email" />
        <TextField source="password" />
        <EditButton basepath="/teachers" />
        <DeleteButton basepath="/teachers" />
      </Datagrid>
    </List>
  );
};

export default TeacherList;
