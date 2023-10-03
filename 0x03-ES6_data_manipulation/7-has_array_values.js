export default function hasValuesFromArray(set = new Set(), arr) {
  for (let value of arr) {
    if (!set.has(value)) {
      return false;
    }
  }
  return true;
}
