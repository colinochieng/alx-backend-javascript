export default function getFullBudgetObject(income, gdp, capita) {
  const fullBudget = {
    income,
    gdp,
    capita,
    getIncomeInDollars() {
      return `$${this.income}`;
    },
    getIncomeInEuros() {
      return `${this.income} euros`;
    },
  };

  return fullBudget;
}
