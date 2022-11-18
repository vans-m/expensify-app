import React from 'react'
import { render } from '../utils/customRender'
import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'

test('Should render ExpenseListItem with data', () => {
	const { getByText, getByTestId } = render(
		<ExpenseListItem {...expenses[0]} />
	)
	expect(getByTestId('expense-element')).toBeInTheDocument
    expect(getByText(expenses[0].description)).toBeInTheDocument
    expect(getByText(`Amount: ${expenses[0].amount}`)).toBeInTheDocument
})

test('Should render ExpenseListItem with note if provided', () => {
    const { getByText } = render(<ExpenseListItem {...expenses[0]} note="something" />)
	expect(getByText('Note: something')).toBeInTheDocument
})
