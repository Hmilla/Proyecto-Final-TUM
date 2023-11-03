import ReactModal from "react-modal";

export default function ModalCreateGrades({
  students,
  newGradeDescription,
  setNewGradeDescription,
  newGrades,
  handleGradeChange,
  handleCreateGrades,
  isModalOpen,
  closeModal,
  clase,
  course
}) {
  ReactModal.setAppElement("#root");
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Create Grade Modal"
    >
      <h2 className="text-xl font-bold mb-4">Crea una nueva calificación para "{clase}" en el curso "{course}"</h2>
      <label htmlFor="newGradeDescription" className="block font-semibold">
        Descripción
      </label>
      <input
        type="text"
        id="newGradeDescription"
        name="newGradeDescription"
        value={newGradeDescription}
        onChange={(e) => setNewGradeDescription(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />

      {students
        .filter((student) => student.class === clase)
        .map((student) => (
          <div key={student.id} className="flex gap-5 items-center mb-5">
            
            <label htmlFor={`grade-${student.id}`}>
              <span className="font-semibold text-google-blue">Calificación: </span>
              <span className="">{student.name}</span> 
            </label>
            <input
              type="number"
              id={`grade-${student.id}`}
              name={`grade-${student.id}`}
              value={newGrades[student.id] || ""}
              onChange={(e) => handleGradeChange(student.id, e.target.value)}
              className=" p-2 border rounded"
            />
          </div>
        ))}

      <button
        onClick={handleCreateGrades}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Create
      </button>
    </ReactModal>
  );
}
