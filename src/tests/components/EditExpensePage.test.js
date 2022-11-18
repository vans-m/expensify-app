import React from 'react'
import { render } from '../utils/customRender'
import userEvent from '@testing-library/user-event'
import { EditExpensePage } from '../../components/EditExpensePage'
import manageOnSubmit from '../../form-actions/manageOnSubmit'
import manageOnRemove from '../../form-actions/manageOnRemove'
import expenses from '../fixtures/expenses'

jest.mock('../../form-actions/manageOnSubmit')
jest.mock('../../form-actions/manageOnRemove')

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
	useParams: () => ({
		id: '123' // Id for expenses[0]
	})
}))

describe('EditExpensePage', () => {
	test('Should call manageOnSubmit', async () => {
		const { getByText, getByTestId } = render(<EditExpensePage expenses={expenses} dispatch={() => {}} />)
		expect(getByText('Edit Expense')).toBeInTheDocument
		await userEvent.click(getByTestId('submit'))
		expect(manageOnSubmit).toHaveBeenCalledWith('edit', expect.any(Function), expect.any(Function), expenses[0], expenses[0].id)
	})
	test('Should call useNavigate when removing an expense', async () => {
		const { getByTestId } = render(<EditExpensePage expenses={expenses} dispatch={() => {}} />)
		await userEvent.click(getByTestId('remove'))
		expect(manageOnRemove).toHaveBeenCalledWith(expect.any(Function), expect.any(Function), expenses[0].id)
	})
})
