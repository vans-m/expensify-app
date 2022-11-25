import { startAddExpense } from '../../actions/expenses'
import manageOnSubmit from '../../form-actions/manageOnSubmit'
import expenses from '../fixtures/expenses'

jest.mock('firebase/database')

jest.mock('../../actions/expenses.js', () => ({
	startAddExpense: jest.fn(), // use actual for all non-hook parts
	editExpense: jest.fn().mockReturnValue({ type: 'EDIT_EXPENSE' })
}))
const dispatch = jest.fn()
const navigate = jest.fn()

describe('manageOnSubmit', () => {
	test('Should dispatch addExpense and navigate when adding expense', () => {
		manageOnSubmit('add', dispatch, navigate, expenses[1])
		expect(dispatch).toHaveBeenCalledWith(startAddExpense(expenses[1]))
		expect(navigate).toHaveBeenCalledWith('/')
	})
	test('Should dispatch editExpense and navigate when editing expense', () => {
		manageOnSubmit('edit', dispatch, navigate, expenses[1], expenses[1].id)
		expect(dispatch).toHaveBeenCalledWith({ type: 'EDIT_EXPENSE' })
		expect(navigate).toHaveBeenCalledWith('/')
	})
})
