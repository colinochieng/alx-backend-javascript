export default function updateStudentGradeByCity(getListStudents = [], city, newGrades = []) {
  return getListStudents
    .filter(({ location }) => location === city)
    .map((value) => {
      let studentIsGraded = false;
      const studentData = JSON.parse(JSON.stringify(value));

      for (const { studentId, grade } of newGrades) {
        if (studentId === studentData.id) {
          studentIsGraded = true;
          studentData.grade = grade;
        }
      }

      if (!studentIsGraded) {
        studentData.grade = 'N/A';
      }

      return studentData;
    });
}
