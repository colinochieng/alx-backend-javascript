/**
 * function that handles a promise
 * @param {promise} promise - instance of a promise
 */
export default function handleResponseFromAPI(promise) {
  promise.then(() => ({ status: 200, body: 'success' }))
    .then(() => {
      console.log('Got a response from the API');
    }).catch(() => new Error());
}
