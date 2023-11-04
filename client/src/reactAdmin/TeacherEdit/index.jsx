import {Edit, SimpleForm, TextInput, SelectArrayInput} from 'react-admin'

const TeacherEdit = (props)=>{
    return(
        <Edit title= "Add a Teacher" {...props} >
            <SimpleForm>
                <TextInput source= 'name' />
                <TextInput source= 'email' />
                <SelectArrayInput
                    label="courses"
                    source="courses"
                    choices={[
                        { id: 'personalsocial', name: 'Personal Social' },
                        { id: 'comunicacion', name: 'Comunicación' },
                        { id: 'matematica', name: 'Matemática' },
                        { id: 'psicomotriz', name: 'Psicomotriz' },
                        { id: 'cienciaytecnologia', name: 'Ciencia y Tecnología' },
                        { id: 'arteycultura', name: 'Arte y Cultura' },
                        { id: 'educacionfisica', name: 'Educación Física' },
                        { id: 'educacionreligiosa', name: 'Educación Religiosa' },
                        {id:'tutoriayorientacioneducativa', name:'Tutoría y Orientación Educativa'}
                        
                    ]}
                    translateChoice= {false}
                />
                <TextInput source= 'password' />
            </SimpleForm>
        </Edit>
    )
   
}

export default TeacherEdit