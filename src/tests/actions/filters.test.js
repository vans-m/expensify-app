import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';

test('Should generate set start date action object', () => {
    const action = setStartDate(new Date(2022, 12, 1))
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: new Date(2022, 12, 1)
    })
})

test('Should generate set end date action object', () => {
    const action = setEndDate(new Date(2022, 12, 1))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: new Date(2022, 12, 1)
    })
})

test('Should generate set text filter action object with provided values', () => {
    const textData = 'test text'
    const action = setTextFilter(textData)
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'test text'
    })
})

test('Should generate set text filter action object with default values', () => {
	const action = setTextFilter()
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: '',
	})
})

test('Should generate sort by date action object', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('Should generate sort by amount action object', () => {
	const action = sortByAmount()
	expect(action).toEqual({
		type: 'SORT_BY_AMOUNT',
	})
})
