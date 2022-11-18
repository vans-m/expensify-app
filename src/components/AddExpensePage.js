import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { useNavigate } from 'react-router-dom'
import manageOnSubmit from '../form-actions/manageOnSubmit'

const AddExpensePage = ({ dispatch }) => {
	const navigate = useNavigate()
	return (
		<div>
			<h1>Add Expense</h1>
			<ExpenseForm onSubmit={(expense) => manageOnSubmit('add', dispatch, navigate, expense)} />
		</div>
	)
}

export default connect()(AddExpensePage)
