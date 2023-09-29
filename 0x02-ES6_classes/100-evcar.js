import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    if (typeof range !== 'string') {
      throw new Error('Range must be a string');
    }

    this._range = range;
  }

  cloneCar() {
    let range = this._range;
    range = undefined;
    return new Car(range, range, range);
  }
}
