export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const idArr = [];

  for (let { id } of arr) {
    idArr.push(id);
  }

  return idArr;
}
