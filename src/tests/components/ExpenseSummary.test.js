import React from 'react'
import { ExpenseSummary } from '../../components/ExpenseSummary'
import { render } from '../utils/customRender'
import expenses from '../fixtures/expenses'

test('Should correctly render ExpenseSummary', () => {
	const { getByTestId } = render(<ExpenseSummary expenses={expenses} />)
	expect(getByTestId('summary')).toBeInTheDocument
})
