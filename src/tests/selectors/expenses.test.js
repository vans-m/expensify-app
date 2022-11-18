import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses'

test('Should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([ expenses[1], expenses[2] ])
})

test('Should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: new Date(2022, 12, 15),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([ expenses[0], expenses[2] ])
})

test('Should filter by end date', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: new Date(2022, 12, 15)
	}
	const result = selectExpenses(expenses, filters)
	expect(result).toEqual([ expenses[1] ])
})

test('Should filter by date', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined,
	}
	const result = selectExpenses(expenses, filters)
	expect(result).toEqual([ expenses[1], expenses[0], expenses[2] ])
})

test('Should filter by amount', () => {
	const filters = {
		text: '',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined,
	}
	const result = selectExpenses(expenses, filters)
	expect(result).toEqual([ expenses[1], expenses[2], expenses[0] ])
})
