import { startRemoveExpense } from '../actions/expenses'

const manageOnRemove = (dispatch, navigate, id) => {
	dispatch(startRemoveExpense(id))
	navigate('/')
}

export default manageOnRemove
