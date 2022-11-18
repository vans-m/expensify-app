import React from 'react'
import { render } from '../utils/customRender'
import userEvent from '@testing-library/user-event'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

const onSubmitSpy = jest.fn()
const onRemoveSpy = jest.fn()

const testExpense = expenses[0]

test('Should render ExpenseForm correctly', () => {
	const { getByPlaceholderText, getByText } = render(<ExpenseForm />)
	expect(getByPlaceholderText('Description')).toBeInTheDocument
    expect(getByPlaceholderText('Amount')).toBeInTheDocument
    expect(getByText('Add Expense')).toBeInTheDocument
})

test('Should render ExpenseForm correctly with expense data', () => {
	const { getByDisplayValue, getByPlaceholderText, getByText } = render(<ExpenseForm expense={testExpense} />)
	expect(getByDisplayValue(testExpense.description)).toBeInTheDocument
    expect(getByPlaceholderText('Description')).toHaveValue(testExpense.description)
    expect(getByText('Edit Expense')).toBeInTheDocument
})

test('Should render error for invalid form submission', async () => {
	const { description, ...expense } = testExpense
	const { getByTestId } = render(<ExpenseForm expense={expense} onSubmit={onSubmitSpy} />)
	await userEvent.click(getByTestId('submit'))
	expect(getByTestId('error-msg')).toBeInTheDocument
})

test('Should render error for invalid form submission when adding expense', async () => {
	const { getByTestId, getByPlaceholderText } = render(<ExpenseForm onSubmit={onSubmitSpy} />)

	await userEvent.type(getByPlaceholderText('Description'), 'Bill')
	await userEvent.click(getByTestId('submit'))
	expect(getByTestId('error-msg')).toBeInTheDocument
})

test('Should set description on input change', async () => {
	const { getByPlaceholderText } = render(<ExpenseForm />)
	await userEvent.type(getByPlaceholderText('Description'), 'rent')
	expect(getByPlaceholderText('Description')).toHaveValue('rent')
})

// do one for note and amount

test('Should call onSubmit prop for valid form submission', async () => {
	const { getByTestId, getByPlaceholderText } = render(<ExpenseForm expense={testExpense} onSubmit={onSubmitSpy} />)
	await userEvent.clear(getByPlaceholderText('Amount'))
	const value = '345'
	await userEvent.type(getByPlaceholderText('Amount'), value)
	await userEvent.click(getByTestId('submit'))
	expect(onSubmitSpy).toHaveBeenCalledWith({
		...testExpense,
		amount: parseFloat(value, 10)
	})
})

test('Should call OnRemove prop when remove button is clicked', async () => {
    const { getByTestId } = render(<ExpenseForm expense={testExpense} onRemove={onRemoveSpy} />)
    const delButton = getByTestId('remove')
    expect(delButton).toBeInTheDocument
    await userEvent.click(delButton)
    expect(onRemoveSpy).toHaveBeenCalled()
})
