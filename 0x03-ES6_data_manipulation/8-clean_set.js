export default function cleanSet(set, startString) {
  let strArr = [];
  if (startString) {
    for (let value of set) {
      if (value.startsWith(startString, 0)) {
        strArr.push(value.replace(startString, ""));
      }
    }
  }
  return strArr.join("-");
}
