import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userIdSelector } from "../../selectors/userSelector";
import { read, create } from "../../services";
import { userSelector } from "../../selectors/userSelector";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

export default function Teacher() {
  const user = useSelector(userSelector);
  const userId = useSelector(userIdSelector);

  const [grades, setGrades] = useState([]);
  const [students, setStudents] = useState([]);
  const [clase, setClase] = useState("inicial");
  const [course, setCourse] = useState("matematica");

  const clases = [
    { id: "inicial", name: "inicial" },
    { id: "1", name: "1" },
    { id: "2", name: "2" },
    { id: "3", name: "3" },
    { id: "4", name: "4" },
    { id: "5", name: "5" },
    { id: "6", name: "6" },
  ];

  const getGrades = async () => {
    const response = await read("grades");
    setGrades(response.filter((grade) => grade.teacher_id === userId));
  };

  const getStudents = async () => {
    const response = await read("students");
    setStudents(response);
  };

  const handleSelectClassChange = (event) => {
    setClase(event.target.value);
  };

  const handleSelectCourseChange = (event) => {
    setCourse(event.target.value);
  };

  useEffect(() => {
    getGrades();
    getStudents();
  }, [userId]);

  // Estado para el modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Estado para descripción de nueva calificación
  const [newGradeDescription, setNewGradeDescription] = useState("");

  // Estado para nuevas calificaciones
  const [newGrades, setNewGrades] = useState({});

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Función para manejar cambios en el input de calificación
  const handleGradeChange = (studentId, value) => {
    const newGradesCopy = { ...newGrades };
    newGradesCopy[studentId] = value;
    setNewGrades(newGradesCopy);
  };

  // Función para crear calificaciones
  const handleCreateGrades = async () => {
    const studentGrades = Object.keys(newGrades).map((studentId) => ({
      student_id: parseInt(studentId),
      grade: parseInt(newGrades[studentId]),
    }));

    const newGrade = {
      description: newGradeDescription,
      clase: clase,
      teacher_id: user.id,
      course: course,
      student_grades: studentGrades,
    };

    // const response = await create("grades", newGrade);
    const response = await fetch(`http://localhost:5000/grades`, {
        method:"POST",
        headers : {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newGrade)
      });
    
      const data = await response.json();

    if (response) {
      getGrades();
      setNewGradeDescription("");
      setNewGrades({});
      closeModal(); // Cierra el modal después de crear la calificación
    }
  };

  return (
    <div>
      <div>{user.name}</div>

      <div>
        <label htmlFor="selectClass">Selecciona una Clase:</label>
        <select id="selectClass" value={clase} onChange={handleSelectClassChange}>
          {clases.map((clase) => (
            <option key={clase.id} value={clase.id}>
              {clase.name}
            </option>
          ))}
        </select>
        <p>Clase seleccionada: {clase}</p>
      </div>

      <div>
        <label htmlFor="selectCourse">Selecciona un curso:</label>
        <select id="selectCourse" value={course} onChange={handleSelectCourseChange}>
          {user.courses.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
        <p>Curso seleccionado: {course}</p>
      </div>

      <button onClick={openModal} className="bg-blue-500 text-white p-2 rounded">
        Create
      </button>

      <div className="mt-10">
        {grades
          .filter((grade) => grade.clase === clase && grade.course === course)
          .map((grade) => (
            <div key={grade.id}>
              {grade.description}
              {grade.student_grades.map((grade_student) => (
                <div key={grade_student.student_id}>
                  {students.find((student) => student.id === grade_student.student_id)?.name}{" "}
                  {grade_student.grade}
                </div>
              ))}
            </div>
          ))}
      </div>

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Create Grade Modal"
      >
        <h2>Crear nueva calificación</h2>
        <label htmlFor="newGradeDescription">Descripción:</label>
        <input
          type="text"
          id="newGradeDescription"
          name="newGradeDescription"
          value={newGradeDescription}
          onChange={(e) => setNewGradeDescription(e.target.value)}
        />

        {students
          .filter((student) => student.class === clase)
          .map((student) => (
            <div key={student.id}>
              <p>{student.name}</p>
              <label htmlFor={`grade-${student.id}`}>Calificación:</label>
              <input
                type="number"
                id={`grade-${student.id}`}
                name={`grade-${student.id}`}
                value={newGrades[student.id] || ""}
                onChange={(e) => handleGradeChange(student.id, e.target.value)}
              />
            </div>
          ))}

        <button onClick={handleCreateGrades}>Create</button>
      </ReactModal>
    </div>
  );
}



// import {
//     CheckCircleIcon,
//     TrashIcon,
//   } from "@heroicons/react/24/solid";

//   import {Edit} from '../../components'

//   export default function Task({ task, getTasks  }) {
//     return (
//       <>
//         <p>{task.id}) {task.text}</p>
//         <div className="flex gap-2">
//           <CheckCircleIcon className="h-6 w-6 text-green-500 cursor-pointer" />
//           <Edit task={task} getTasks={getTasks}/>
//           <TrashIcon className="h-6 w-6 text-red-500 cursor-pointer" />
//         </div>
//       </>
//     );
//   }



// import { useState } from "react";
// import Swal from "sweetalert2";
// import { create } from "../../services";
// import {TextField, Button} from '../../components'
// import { useSelector } from "react-redux";
// import { userIdSelector } from "../../selectors/userSelector";

// export default function FormTask({getTasks}) {
//   const [grade, setTextTask] = useState("");

//   const handleInputChange = (e) => setTextTask(e.target.value);

//   const userId = useSelector(userIdSelector)

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     if (!textTask) {
//       Swal.fire({
//         title: "Error",
//         text: "Completa el campo",
//         icon: "error",
//       });

//       return;
//     }

//     // llamo a la funcion create
//     await create({
//       text: textTask,
//       status: "created",
//       user_id: userId,
//       category: null,
//       priority: null
//     }, "tasks");

//     setTextTask("");
//     Swal.fire({
//       title: "Success",
//       text: "Se creo la tarea correctamente",
//       icon: "success",
//     });

//     await getTasks()
//   };

//   return (
//     <>
//       <h2 className="font-semibold text-xl mt-3">Crear tu tarea</h2>
//       <form className="my-5 flex items-center" onSubmit={handleFormSubmit}>

//         <TextField value={textTask} onChange={handleInputChange}/>
//         <Button type="submit" text="Crear" variant="danger" />
//       </form>
//     </>
//   );
// }














// import { useState } from "react";
// import { PencilIcon } from "@heroicons/react/24/solid";
// import { Dialog } from "@headlessui/react";
// import { TextField, Select, Button } from "../../components";
// import { update } from "../../services";

// const categories = ["Hogar", "Trabajo", "Estudio", "Ocio"];
// const priorities = ["Baja", "Media", "Alta", "Urgente"];

// export default function Edit({ task, getTasks }) {
//   const [open, setOpen] = useState(false);

//   const [text, setText] = useState(task.text)
//   const [category, setCategory] = useState(task.category ?? categories[0]);
//   const [priority, setPriority] = useState(task.priority ?? priorities[0]);

//   const handleChange = (e) => setText(e.target.value)

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const body = {
//       text,
//       category,
//       priority
//     }
//     await update(task.id, body, "tasks")

//     setOpen(false)
//     getTasks()
//   }

//   return (
//     <>
//       <PencilIcon
//         className="h-6 w-6 text-blue-500 cursor-pointer"
//         onClick={() => setOpen(true)}
//       />
//       <Dialog
//         open={open}
//         onClose={() => setOpen(false)}
//         className="relative z-50"
//       >
//         <div className="fixed inset-0 bg-black/30"></div>

//         <div className="fixed inset-0 flex w-screen items-center justify-center m-4 ">
//           <Dialog.Panel className="bg-white mx-auto max-w-sm rounded p-4 w-full">
//             <Dialog.Title>Editar Tarea: {task.text}</Dialog.Title>
//             <form onSubmit={handleSubmit}>
//             <TextField
//                 value={text}
//                 onChange={handleChange}
//                 placeholder="Editar tarea"
//                 className="rounded-r"
//               />
//               <div className="mt-5">
//                 <Select
//                   value={category}
//                   items={categories}
//                   onChange={setCategory}
//                 />
//               </div>
//               <div>
//                 <Select
//                   value={priority}
//                   items={priorities}
//                   onChange={setPriority}
//                 />
//               </div>
//               <div className="mt-5">
//                 <Button text="Actualizar" className="rounded-1 w-full" type="Submit"/>
//               </div>
//             </form>
//           </Dialog.Panel>
//         </div>
//       </Dialog>
//     </>
//   );
// }
