import {Create, SimpleForm, TextInput, SelectArrayInput} from 'react-admin'

const TeacherCreate = (props)=>{
    return(
        <Create title= "Add a Teacher" {...props} >
            <SimpleForm>
                <TextInput required={true} source= 'name' />
                <TextInput required={true} source= 'email' />
                <SelectArrayInput
                    required={true}
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
                    
                />
                <TextInput required={true} source= 'password' />
            
            </SimpleForm>
        </Create>
    )
   
}

export default TeacherCreate