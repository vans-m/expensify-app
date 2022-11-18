import manageOnSubmit from '../../form-actions/manageOnSubmit'
import expenses from '../fixtures/expenses'

const dispatch = jest.fn()
const navigate = jest.fn()

describe('manageOnSubmit', () => {
	test('Should dispatch addExpense and navigate when adding expense', () => {
		manageOnSubmit('add', dispatch, navigate, expenses[1])
		expect(dispatch).toHaveBeenCalledWith({ type: 'ADD_EXPENSE', expense: { ...expenses[1], id: expect.any(String) } })
		expect(navigate).toHaveBeenCalledWith('/')
	})
	test('Should dispatch editExpense and navigate when editing expense', () => {
		manageOnSubmit('edit', dispatch, navigate, expenses[1], expenses[1].id)
		expect(dispatch).toHaveBeenCalledWith({
			type: 'EDIT_EXPENSE',
            updates: { ...expenses[1] },
            id: expenses[1].id
		})
		expect(navigate).toHaveBeenCalledWith('/')
	})
})
