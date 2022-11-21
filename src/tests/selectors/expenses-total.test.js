import getExpensesTotal from "../../selectors/expenses-total"
import expenses from '../fixtures/expenses'

test('Should return all expenses amount in the array', () => {
  expect(getExpensesTotal(expenses)).toBe(60)
})