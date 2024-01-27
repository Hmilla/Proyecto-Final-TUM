import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { userIdSelector } from "../../selectors/userSelector";
import { read, create, destroy } from "../../services";
import { userSelector } from "../../selectors/userSelector";
import { ModalCreateGrades, Select, Container, LogoutButton } from "../../components";
import Swal from "sweetalert2";

export default function Teacher() {
  const user = useSelector(userSelector);
  if (!user || user.role !== "teacher") return <Navigate to="/login/teacher" />;

  const userId = useSelector(userIdSelector);

  const [grades, setGrades] = useState([]);
  const [students, setStudents] = useState([]);
  const [clase, setClase] = useState("inicial");
  const [course, setCourse] = useState(user.courses[0]);

  const classes = ["inicial", "1", "2", "3", "4", "5", "6"];

  const getGrades = async () => {
    const response = await read("grades");
    setGrades(response.filter((grade) => grade.teacher_id === userId));
    console.log(grades)
  };

  const getStudents = async () => {
    const response = await read("students");
    setStudents(response);
    console.log(response)
  };

  const handleSelectClassChange = (event) => {
    setClase(event.target.value);
    console.log(clase)
  };

  const handleSelectCourseChange = (event) => {
    
    setCourse(event.target.value);

  };

  useEffect(() => {
    getGrades();
    getStudents();
  }, [userId]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newGradeDescription, setNewGradeDescription] = useState("");

  const [newGrades, setNewGrades] = useState({});

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleGradeChange = (studentId, value) => {
    if (value >= 0 && value <= 20) {
      setNewGrades({ ...newGrades, [studentId]: value });
    }
  };

  const handleCreateGrades = async () => {
    if (!newGradeDescription) {
      Swal.fire({
        icon: "error",
        text: "Debes completar todos los campos",
      });
      return;
    }

    const studentGrades = Object.keys(newGrades).map((studentId) => ({
      student_id: studentId,
      grade: newGrades[studentId],
    }));

    const minGrade = Math.min(...studentGrades.map((grade) => grade.grade));
    const maxGrade = Math.max(...studentGrades.map((grade) => grade.grade));
    const sumGrades = studentGrades.reduce((sum, grade) => parseInt(sum) + parseInt(grade.grade), 0);
    const averageGrade = (sumGrades / studentGrades.length).toFixed(1);

    const newGrade = {
      description: newGradeDescription,
      clase,
      teacher_id: user.id,
      course,
      student_grades: studentGrades,
      min_grade: minGrade,
      max_grade: maxGrade,
      promedio: averageGrade,
    };

    const response = await create(newGrade, "grades");
    if (response) {
      getGrades();
      setNewGradeDescription("");
      setNewGrades({});
      closeModal();
    }
  };

  const destroyGrade = async (id) => {
    const response = await destroy("grades", id);
    if (response) {
      getGrades();
    }
  };

  return (
    <div className="bg-gradient-to-b from-purple-500 to-blue-500 min-h-screen text-white">
      <LogoutButton />

      <Container>
        <h1 className="text-4xl font-bold mt-4 mb-8">Hola, {user.name}!</h1>

        <div className="flex justify-between">
          <div className="flex gap-8">
            <Select
              title="Una Clase"
              value={clase}
              onChange={handleSelectClassChange}
              items={classes}
            />

            <Select
              title="Un Curso"
              value={course}
              onChange={handleSelectCourseChange}
              items={user.courses}
            />
          </div>
          <button
            onClick={openModal}
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4 mb-4"
          >
            Crea una calificación
          </button>
        </div>
        <h2 className="mt-10">
          Calificaciones creadas en la clase "{clase}" en el curso "{course}"
        </h2>

        <div className="mt-10">
          {grades
            .filter((grade) => grade.clase === clase && grade.course === course)
            .map((grade) => (
              <div key={grade.id} className="mb-6">
                <div className="bg-purple-400 p-4 rounded-lg">
                  <div className="text-2xl font-semibold mb-1">{grade.description}</div>
                  <div className="text-google-red bg-white/20 font-semibold">
                    Min Nota: {grade.min_grade}
                  </div>
                  <div className="text-google-green bg-white/20 font-semibold">
                    Max Nota: {grade.max_grade}
                  </div>
                  <div className="text-google-blue bg-white/20 font-semibold">
                    Promedio: {grade.promedio}
                  </div>
                </div>

                <div className="bg-blue-400 p-4 rounded-lg mt-4">
                  <div className="grid grid-cols-2 font-bold text-white">
                    <div>Nombre del Estudiante</div>
                    <div>Calificación</div>
                  </div>
                  {grade.student_grades.map((gradeStudent) => (
                    <div className="grid grid-cols-2 gap-2 text-black font-semibold" key={gradeStudent.student_id}>
                      <div className="bg-white p-2 rounded">
                        {students.find((student) => student.id === gradeStudent.student_id)?.name}
                      </div>
                      <div className="bg-white p-2 rounded">{gradeStudent.grade}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-2 ml-1">
                  <button
                    onClick={() => destroyGrade(grade.id)}
                    className="bg-red-500 text-white p-2 rounded"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
        </div>

        <ModalCreateGrades
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          students={students}
          clase={clase}
          course={course}
          newGrades={newGrades}
          newGradeDescription={newGradeDescription}
          setNewGradeDescription={setNewGradeDescription}
          handleGradeChange={handleGradeChange}
          handleCreateGrades={handleCreateGrades}
        />
      </Container>
    </div>
  );
}
