/**
 * A function to return a promise instance
 * @param {boolean} success - A boolean value indicating the success of the operation.
 * @returns {Promise} - value based on the success value
 */
export default function getFullResponseFromAPI(success) {
  if (success) {
    return Promise.resolve({ status: 200, body: 'Success' });
  }
  return Promise.reject(new Error('The fake API is not working currently'));
}
