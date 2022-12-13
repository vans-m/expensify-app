import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { useNavigate } from 'react-router-dom'
import manageOnSubmit from '../form-actions/manageOnSubmit'

const AddExpensePage = ({ dispatch }) => {
	const navigate = useNavigate()
	return (
		<div>
			<div className="page-header">
				<div className="content-container">
					<h1 className="page-header__title">Add Expense</h1>
				</div>
			</div>
			<ExpenseForm onSubmit={(expense) => manageOnSubmit('add', dispatch, navigate, expense)} />
		</div>
	)
}

export default connect()(AddExpensePage)
