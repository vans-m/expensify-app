import manageOnRemove from '../../form-actions/manageOnRemove'

jest.mock('firebase/database')

const dispatch = jest.fn()
const navigate = jest.fn()

describe('manageOnSubmit', () => {
	test('Should dispatch removeExpense and navigate when removing expense', () => {
		manageOnRemove(dispatch, navigate, '123')
		expect(dispatch).toHaveBeenCalledWith({ type: 'REMOVE_EXPENSE', id: '123' })
		expect(navigate).toHaveBeenCalledWith('/')
	})
})
