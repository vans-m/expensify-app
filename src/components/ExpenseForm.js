import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

const ExpenseForm = ({ expense: expenseProp, onSubmit: onSubmitProp, onRemove }) => {
	const [expense, setExpense] = useState({
		description: expenseProp?.description || '',
		note: expenseProp?.note || '',
		amount: expenseProp?.amount || '',
		createdAt: expenseProp?.createdAt || new Date().getTime()
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
			onSubmitProp({
				...expense,
				amount: parseFloat(expense.amount, 10)
			})
		}
	}
	return (
		<div className="content-container">
			<form className="form data-input" onSubmit={onSubmit}>
				{error && (
					<p className="form__error" data-testid="error-msg">
						{error}
					</p>
				)}
				<input
					className="text-input"
					type="text"
					placeholder="Description"
					autoFocus
					value={expense.description}
					onChange={onDescriptionChange}
				/>
				<input className="text-input" type="text" placeholder="Amount" value={expense.amount} onChange={onAmountChange} />
				<DatePicker className="text-input" selected={expense.createdAt} onChange={onDateChange} dateFormat="dd/MM/yyyy" />
				<textarea
					className="textarea"
					placeholder="Add a note for your expense (optional)"
					value={expense.note}
					onChange={onNoteChange}
				/>
				<div>
					<button className="button" data-testid="submit" type="submit">
						{expenseProp && expenseProp.id ? 'Save Expense' : 'Add Expense'}
					</button>
				</div>
				{expenseProp && onRemove && (
					<div>
						<button className="button button--secondary" data-testid="remove" type="button" onClick={onRemove}>
							Remove Expense
						</button>
					</div>
				)}
			</form>
		</div>
	)
}

export default ExpenseForm
