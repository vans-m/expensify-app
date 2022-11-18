import { removeExpense } from "../actions/expenses"

const manageOnRemove = (dispatch, navigate, id) => {
	dispatch(removeExpense(id))
	navigate('/')
}

export default manageOnRemove
