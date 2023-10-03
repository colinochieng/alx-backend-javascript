export default function getStudentIdsSum(getListStudents = []) {
  return getListStudents.reduce((accumulator, { id: studentsId }) => {
    return accumulator + studentsId;
  }, 0);
}
