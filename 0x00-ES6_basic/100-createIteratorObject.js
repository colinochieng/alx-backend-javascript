export default function createIteratorObject(report) {
  const data = [];
  for (const arr of Object.values(report.allEmployees)) {
    data.push(...arr);
  }

  return {
    data,
    [Symbol.iterator]() {
      let idx = 0;
      return {
        next: () => {
          if (idx < this.data.length) {
            const value = this.data[idx];
            idx += 1;
            return { value, done: false };
          }
          return { value: undefined, done: true };
        },
      };
    },
  };
}
