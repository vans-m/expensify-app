import { startAddExpense, startEditExpense } from '../actions/expenses'

const manageOnSubmit = (mode, dispatch, navigate, expense, id) => {
	if (mode === 'add') {
		dispatch(startAddExpense(expense))
	} else if (mode === 'edit') {
		dispatch(startEditExpense(id, expense))
	}
	navigate('/')
}

export default manageOnSubmit
