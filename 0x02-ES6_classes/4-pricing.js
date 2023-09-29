import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a number');
    } else if (!(currency instanceof Currency)) {
      throw TypeError('Currency must be an instance of Currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw TypeError('Value must be an instance of Currency');
    }
    this._currency = value;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw TypeError('Value must be a number');
    }
    this._amount = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw TypeError('Conversion rate must be a number');
    }
    return amount * conversionRate;
  }
}
