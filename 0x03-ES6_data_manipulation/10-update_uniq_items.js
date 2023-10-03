export default function updateUniqueItems(items) {
  try {
    for (let [key, value] of items) {
      if (value === 1) {
        items.set(key, 100);
      }
    }

    return items;
  } catch {
    throw new Error("Cannot process");
  }
}
