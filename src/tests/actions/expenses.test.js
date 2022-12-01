import {
	addExpense,
	startAddExpense,
	removeExpense,
	editExpense,
	setExpenses,
	startSetExpenses
} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import { ref, push } from 'firebase/database'

jest.mock('firebase/database')
jest.mock('firebase/database', () => ({
	ref: jest.fn(),
	push: jest.fn().mockResolvedValue(jest.fn()),
	child: jest.fn(),
	getDatabase: jest.fn()
}))
const dispatch = jest.fn()

describe('actions > expenses', () => {
	describe('removeExpense', () => {
		test('Should set up remove expense action object', () => {
			const action = removeExpense('123')
			expect(action).toEqual({
				type: 'REMOVE_EXPENSE',
				id: '123'
			})
		})
	})

	describe('editExpense', () => {
		test('Should set up edit expense action object', () => {
			const action = editExpense('123', { note: 'updates' })
			expect(action).toEqual({
				type: 'EDIT_EXPENSE',
				id: '123',
				updates: { note: 'updates' }
			})
		})
	})

	describe('addExpense', () => {
		test('Should set up add expense action object with provided values', () => {
			const action = addExpense(expenses[1])
			expect(action).toEqual({
				type: 'ADD_EXPENSE',
				expense: {
					...expenses[1]
				}
			})
		})
	})

	describe('startAddExpense', () => {
		test('Should add expense to the database and store', () => {
			const { id, ...expense } = expenses[0]
			startAddExpense(expense)(dispatch)
			expect(push).toHaveBeenCalledWith(ref(), expense)
		})

		test('Should add expense to the database and store with default values', () => {
			const expense = { description: '', note: '', amount: 0, createdAt: 0 }
			startAddExpense({})(dispatch)
			expect(push).toHaveBeenCalledWith(ref(), expense)
		})
	})

	describe('setExpenses', () => {
		test('should setup set expense action object with data', () => {
			const action = setExpenses(expenses)
			expect(action).toEqual({ type: 'SET_EXPENSES', expenses })
		})
	})
})
