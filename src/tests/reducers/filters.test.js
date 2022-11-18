import filtersReducer from "../../reducers/filters"

const today = new Date()
const y = today.getFullYear()
const m = today.getMonth()

test('Should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: new Date(y, m, 1),
        endDate: new Date(y, m + 1, 0)
    })
})

test('Should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('Should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' })
    expect(state.sortBy).toBe('date')
})

test('Should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'rent' })
	expect(state.text).toBe('rent')
})

test('Should set startDate filter', () => {
    const state = filtersReducer(undefined, {
			type: 'SET_START_DATE',
			startDate: new Date(2022, 12, 25),
		})
    expect(state.startDate).toEqual(new Date(2022, 12, 25))
})

test('Should set endDate filter', () => {
    const state = filtersReducer(undefined, {
			type: 'SET_END_DATE',
			endDate: new Date(2022, 12, 25),
		})
		expect(state.endDate).toEqual(new Date(2022, 12, 25))
})
