import React from 'react'
import { render } from '../utils/customRender'
import { ExpenseList } from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'

test('Should render ExpenseList with data', () => {
    const { getByText, getAllByTestId } = render(<ExpenseList expenses={expenses} />)
    expect(getAllByTestId('expense-element')).toHaveLength(expenses.length)
    expenses.forEach((e) => {
        const expense = getByText(e.description)
        expect(expense).toBeInTheDocument
        expect(expense.closest('a')).toHaveAttribute('href', `/edit/${e.id}`)
    })
})

test('Should render ExpenseList without data', () => {
    const { getByText, findAllByTestId } = render(<ExpenseList expenses={[]} />)
    expect(findAllByTestId('expense-element')).toBeNull
	expect(getByText('No expenses')).toBeInTheDocument
})
