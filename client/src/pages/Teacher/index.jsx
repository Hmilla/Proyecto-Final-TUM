import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { userIdSelector } from "../../selectors/userSelector";
import { read, create, destroy } from "../../services";
import { userSelector } from "../../selectors/userSelector";
import { ModalCreateGrades, Select, Container, LogoutButton } from "../../components";

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
      alert("Por favor, complete todos los campos antes de crear las calificaciones.");
      return;
    }
  
    const studentGrades = Object.keys(newGrades).map((studentId) => ({
      student_id: parseInt(studentId),
      grade: parseInt(newGrades[studentId]),
    }));
  
    const minGrade = Math.min(...studentGrades.map((grade) => grade.grade));
    const maxGrade = Math.max(...studentGrades.map((grade) => grade.grade));
    const sumGrades = studentGrades.reduce((sum, grade) => sum + grade.grade, 0);
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
    <>
      <LogoutButton />

      <Container>
        <div className="text-xl font-bold mb-4">{user.name}</div>
        <div className="flex justify-between">
          <div className="flex gap-8">
            <Select
              title="una Clase"
              value={clase}
              onChange={handleSelectClassChange}
              items={classes}
            />

            <Select
              title="un Curso"
              value={course}
              onChange={handleSelectCourseChange}
              items={user.courses}
            />
          </div>
          <button
            onClick={openModal}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4 mb-4"
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
                <div className=" bg-gray-200 pl-4 pt-2">
                <div className="text-xl font-semibold mb-1">
                  {grade.description}
                </div>

                <div className="text-google-red font-semibold">
                  Min Nota: {grade.min_grade}
                </div>
                <div className="text-google-green font-semibold">
                  Max Nota: {grade.max_grade}
                </div>
                <div className="text-google-blue font-semibold">
                  Promedio: {grade.promedio}
                </div>
                </div>
                

                <div className="bg-gray-200 p-4">
                  <div className="grid grid-cols-2 font-bold">
                    <div>Nombre del Estudiante</div>
                    <div>Calificación</div>
                  </div>
                  {grade.student_grades.map((gradeStudent) => (
                    <div
                      className="grid grid-cols-2 gap-2"
                      key={gradeStudent.student_id}
                    >
                      <div className="bg-white p-2">
                        {
                          students.find(
                            (student) => student.id === gradeStudent.student_id
                          )?.name
                        }
                      </div>
                      <div className="bg-white p-2">{gradeStudent.grade}</div>
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
    </>
  );
}
