export default function iterateThroughObject(reportWithIterator) {
  const result = [];

  for (const data of reportWithIterator) {
    result.push(data);
  }

  return result.join(' | ');
}
