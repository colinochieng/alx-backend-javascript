export default function guardrail(mathFunction) {
  const queue = ['Guardrail was processed'];
  try {
    queue.unshift(mathFunction());
  } catch (err) {
    queue.unshift(err.message);
  }
  return queue;
}
