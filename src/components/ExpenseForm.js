import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

const ExpenseForm = (props) => {
	const [expense, setExpense] = useState({
		description: '',
		note: '',
		amount: '',
		createdAt: new Date().getTime(),
		...props.expense
	})
	const [error, setError] = useState('')
	const onDescriptionChange = (e) => {
		const description = e.target.value
		setExpense({ ...expense, description })
	}
	const onNoteChange = (e) => {
		const note = e.target.value
		setExpense({ ...expense, note })
	}
	const onAmountChange = (e) => {
		const amount = e.target.value
		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			setExpense({ ...expense, amount })
		}
	}
	const onDateChange = (createdAt) => {
		if (createdAt) {
			setExpense({ ...expense, createdAt: createdAt })
		}
	}
	const onSubmit = (e) => {
		e.preventDefault()
		if (!expense.description || !expense.amount) {
			setError('Please provide description and amount.')
		} else {
			setError('')
			props.onSubmit({
				...expense,
				amount: parseFloat(expense.amount, 10)
			})
		}
	}
	return (
		<div>
			{error && <p data-testid="error-msg">{error}</p>}
			<form onSubmit={onSubmit}>
				<input type="text" placeholder="Description" autoFocus value={expense.description} onChange={onDescriptionChange} />
				<input type="text" placeholder="Amount" value={expense.amount} onChange={onAmountChange} />
				<DatePicker selected={expense.createdAt} onChange={onDateChange} dateFormat="dd/MM/yyyy" />
				<textarea placeholder="Add a note for your expense (optional)" value={expense.note} onChange={onNoteChange} />
				<button data-testid="submit" type="submit">
					{props.expense && props.expense.id ? 'Edit Expense' : 'Add Expense'}
				</button>
				{props.expense && props.onRemove && (
					<button data-testid="remove" type="button" onClick={props.onRemove}>
						Remove
					</button>
				)}
			</form>
		</div>
	)
}

export default ExpenseForm
