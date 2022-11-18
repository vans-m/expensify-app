import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test('Should set up remove expense action object', () => {
    const action = removeExpense('123')
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123'
    })
})

test('Should set up edit expense action object', () => {
    const action = editExpense('123', { note: 'updates' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: { note: 'updates' }
    })
})

test('Should set up add expense action object with provided values', () => {
    const expenseData = {
			description: 'rent',
			note: 'last month',
			amount: 0,
			createdAt: 2022,
		}
    const action = addExpense(expenseData)
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
	})
})

test('Should set up add expense action object with default values', () => {
	const expenseData = {}
	const action = addExpense(expenseData)
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			description: '', 
            note: '', 
            amount: 0, 
            createdAt: undefined,
			id: expect.any(String),
		}
	})
})
