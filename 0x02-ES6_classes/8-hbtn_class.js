export default class Airport {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new Error('Size must be a number');
    }

    if (typeof location !== 'string') {
      throw new Error('Location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](kind) {
    if (kind === 'string') {
      return this._location;
    } if (kind === 'number') {
      return this._size;
    }
    return this;
  }
}
