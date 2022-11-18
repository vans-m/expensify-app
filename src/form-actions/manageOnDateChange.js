import { setStartDate, setEndDate } from '../actions/filters'

const onDateChange = (mode, date, dispatch) => {
	if (mode === 'start') {
		dispatch(setStartDate(date))
	} else if (mode === 'end') {
		dispatch(setEndDate(date))
	}
}

export default onDateChange
