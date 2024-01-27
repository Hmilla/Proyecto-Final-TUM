import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { userSelector } from "../../selectors/userSelector";
import { userIdSelector } from "../../selectors/userSelector";
import { read } from "../../services";

import { LogoutButton, Container } from "../../components";

export default function Student() {
  const user = useSelector(userSelector);
  if (!user || user.role !== "student") return <Navigate to="/login/student" />;

  const userId = useSelector(userIdSelector);
  const [grades, setGrades] = useState([]);
  const getGrades = async () => {
    const response = await read("grades");
    setGrades(response.filter((grade) => grade.clase === user.clase));
  };
  useEffect(() => {
    getGrades();
  }, [userId]);
  const courseGradesMap = {};

  grades.forEach((grade) => {
    if (!courseGradesMap[grade.course]) {
      courseGradesMap[grade.course] = [];
    }

    const studentGrade = grade.student_grades.find(
      (student) => student.student_id === userId
    );
    if (studentGrade) {
      courseGradesMap[grade.course].push({
        description: grade.description,
        grade: studentGrade.grade,
        min_grade: grade.min_grade,
        max_grade: grade.max_grade,
        promedio: grade.promedio,
      });
    }
  });

  return (
    <>
      <LogoutButton />
      <Container>
        <div className="text-4xl font-bold text-indigo-600 mb-6">
          ¡Hola, {user.name}!
        </div>
        <div className="text-2xl font-semibold text-gray-700 mb-6">
          Descubre tus logros académicos de este año
        </div>

        {Object.entries(courseGradesMap).map(([course, grades]) => (
          <div key={course} className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">
              {course}
            </h2>
            <table className="w-full border-collapse border-2 border-green-500 shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-green-500 text-white">
                <tr>
                  <th className="px-6 py-3">Descripción</th>
                  <th className="px-6 py-3">Nota</th>
                  <th className="px-6 py-3">Nota mínima</th>
                  <th className="px-6 py-3">Nota máxima</th>
                  <th className="px-6 py-3">Promedio</th>
                </tr>
              </thead>
              <tbody>
                {grades.map((grade, index) => (
                  <tr key={index} className="text-center font-semibold">
                    <td className="border-2 border-green-500 px-6 py-4">
                      {grade.description}
                    </td>
                    <td className="border-2 border-green-500 px-6 py-4">
                      {grade.grade}
                    </td>
                    <td className="border-2 border-green-500 px-6 py-4">
                      {grade.min_grade}
                    </td>
                    <td className="border-2 border-green-500 px-6 py-4">
                      {grade.max_grade}
                    </td>
                    <td className="border-2 border-green-500 px-6 py-4">
                      {grade.promedio}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </Container>
    </>
  );
}
