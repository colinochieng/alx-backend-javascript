export default function cleanSet(set, startString) {
  const strArr = [];
  if (startString.length > 0) {
    for (const value of set) {
      if (value.startsWith(startString, 0)) {
        strArr.push(value.replace(startString, ''));
      }
    }
  }
  return strArr.join('-');
}
