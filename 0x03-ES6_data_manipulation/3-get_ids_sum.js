export default function getStudentIdsSum(getListStudents = []) {
  return getListStudents.reduce((accumulator, { id: studentsId }) => accumulator + studentsId, 0);
}
