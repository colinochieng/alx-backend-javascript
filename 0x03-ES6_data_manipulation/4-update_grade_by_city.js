export default function updateStudentGradeByCity(getListStudents = [], city, newGrades = []) {
  return getListStudents
    .filter(({ location }) => location === city)
    .map((value) => {
      let studentIsGraded = false;

      for (let { studentId, grade } of newGrades) {
        if (studentId === value.id) {
          studentIsGraded = true;
          value.grade = grade;
        }
      }

      if (!studentIsGraded) {
        value.grade = "N/A";
      }

      return value;
    });
}
