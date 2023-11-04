

import { useSelector } from "react-redux/es/hooks/useSelector"
import { userSelector } from "../../selectors/userSelector"


import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
  } from "react-admin";
  
  const AdminList = (props) => {
    const user = useSelector(userSelector)
    
    const blockedId = user.id; // Change this to the ID you want to block
    
    const isRowSelectable = (record) => {

      return record.id !== blockedId;
    };
  
    return (
      <List {...props}>
        <Datagrid isRowSelectable={isRowSelectable}>
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="email" />
          <TextField source="password" />
          <EditButton basepath="/admins" />
          <DeleteButton basepath="/admins" />
        </Datagrid>
      </List>
    );
  };
  
  export default AdminList;