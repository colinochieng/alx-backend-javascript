export default function getListStudents() {
  function Students(id, firstName, location) {
    this.id = id;
    this.firstName = firstName;
    this.location = location;
  }
  const arrStudents = [
    new Students(1, 'Guillaume', 'San Francisco'),
    new Students(2, 'James', 'Columbia'),
    new Students(5, 'Serena', 'San Francisco'),
  ];
  return arrStudents;
}
