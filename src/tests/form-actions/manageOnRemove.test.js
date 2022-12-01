import { startRemoveExpense } from '../../actions/expenses'
import manageOnRemove from '../../form-actions/manageOnRemove'

jest.mock('firebase/database')

jest.mock('../../actions/expenses.js', () => ({
	startRemoveExpense: jest.fn()
}))

const dispatch = jest.fn()
const navigate = jest.fn()

describe('manageOnRemove', () => {
	test('Should dispatch removeExpense and navigate when removing expense', () => {
		manageOnRemove(dispatch, navigate, '123')
		expect(dispatch).toHaveBeenCalledWith(startRemoveExpense('123'))
		expect(navigate).toHaveBeenCalledWith('/')
	})
})
