import {Create, SimpleForm, TextInput} from 'react-admin'

const AdminCreate = (props)=>{
    return(
        <Create title= "Add a Student" {...props} >
            <SimpleForm>
                <TextInput required={true} source= 'name' />
                <TextInput required={true} source= 'email' />
                <TextInput required={true} source= 'password' />
            </SimpleForm>
        </Create>
    )
   
}

export default AdminCreate