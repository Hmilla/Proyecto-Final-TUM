import {Edit, SimpleForm, TextInput} from 'react-admin'

const AdminEdit = (props)=>{
    return(
        <Edit title= "Add a Student" {...props} >
            <SimpleForm>
                <TextInput source= 'name' />
                <TextInput source= 'email' />
                <TextInput source= 'password' />
            </SimpleForm>
        </Edit>
    )
   
}

export default AdminEdit