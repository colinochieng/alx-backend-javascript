export default function getListStudents() {
  const students = function (id, firstName, location) {
    this.id = id;
    this.firstName = firstName;
    this.location = location;
  };
  const arrStudents = [
    new students(1, "Guillaume", "San Francisco"),
    new students(2, "James", "Columbia"),
    new students(5, "Serena", "San Francisco"),
  ];
  return arrStudents;
}
