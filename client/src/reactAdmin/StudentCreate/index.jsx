import { Create, SimpleForm, TextInput, SelectInput } from "react-admin";

const StudentCreate = (props) => {
  return (
    <Create title="Add a Student" {...props}>
      <SimpleForm>
        <TextInput required={true} source="name" />
        <TextInput required={true} source="email" />
        <SelectInput
          required={true}
          source="clase"
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
        <TextInput required={true} source="password" />
      </SimpleForm>
    </Create>
  );
};

export default StudentCreate;
