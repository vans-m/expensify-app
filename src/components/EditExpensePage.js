import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import selectExpenses from '../selectors/expenses'
import manageOnSubmit from '../form-actions/manageOnSubmit'
import manageOnRemove from '../form-actions/manageOnRemove'

export const EditExpensePage = ({ expenses, dispatch }) => {
	const navigate = useNavigate()
	const { id } = useParams()
	const expense = expenses.find((expense) => expense.id === id)
	return (
		<div>
			<div className="page-header">
				<div className="content-container">
					<h1 className="page-header__title">Edit Expense</h1>
				</div>
			</div>
			<ExpenseForm
				expense={expense}
				onSubmit={(expense) => manageOnSubmit('edit', dispatch, navigate, expense, id)}
				onRemove={() => manageOnRemove(dispatch, navigate, id)}
			/>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters)
	}
}

export default connect(mapStateToProps)(EditExpensePage)
