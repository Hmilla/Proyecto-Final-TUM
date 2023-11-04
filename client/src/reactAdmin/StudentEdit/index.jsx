import { Edit, SimpleForm, TextInput, SelectInput } from "react-admin";

const StudentEdit = (props) => {
  return (
    <Edit title="Add a Student" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="email" />
        <SelectInput
          source="class"
          choices={[
            { id: "inicial", name: "inicial" },
            { id: "1", name: "1" },
            { id: "2", name: "2" },
            { id: "3", name: "3" },
            { id: "4", name: "4" },
            { id: "5", name: "5" },
            { id: "6", name: "6" },
          ]}
        />
        <TextInput source="password" />
      </SimpleForm>
    </Edit>
  );
};

export default StudentEdit;
