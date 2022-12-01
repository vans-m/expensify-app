import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('Should set default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' })
	expect(state).toEqual([])
})

test('Should remove expense by id', () => {
	const state = expensesReducer(expenses, {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	})
	expect(state).toEqual([expenses[0], expenses[2]])
})

test('Should not remove expense if id not found', () => {
	const state = expensesReducer(expenses, {
		type: 'REMOVE_EXPENSE',
		id: '234'
	})
	expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
})

test('Should add an expense', () => {
	const expense = {
		id: '101',
		description: 'thing',
		note: '',
		amount: 3804,
		createdAt: new Date(2022, 12, 31)
	}
	const state = expensesReducer(expenses, {
		type: 'ADD_EXPENSE',
		expense
	})
	expect(state).toEqual([...expenses, expense])
})

test('Should edit an expense', () => {
	const amount = 2367
	const state = expensesReducer(expenses, {
		type: 'EDIT_EXPENSE',
		id: '123',
		updates: { amount }
	})
	expect(state[0].amount).toBe(amount)
})

test('Should not edit an expense if not found', () => {
	const amount = 2367
	const state = expensesReducer(expenses, {
		type: 'EDIT_EXPENSE',
		id: '1234',
		updates: { amount }
	})
	expect(state).toEqual(expenses)
})

test('Should set expenses', () => {
	const action = { type: 'SET_EXPENSES', expenses: [expenses[1]] }
	const state = expensesReducer(expenses, action)
	expect(state).toEqual([expenses[1]])
})
