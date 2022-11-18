import React from 'react'
import { render } from '../utils/customRender'
import userEvent from '@testing-library/user-event'
import AddExpensePage from '../../components/AddExpensePage'
import manageOnSubmit from '../../form-actions/manageOnSubmit'

jest.mock('../../form-actions/manageOnSubmit.js')

describe('AddExpensePage', () => {
	test('Should call manageOnSubmit', async () => {
		const { getAllByText, getByTestId, getByPlaceholderText } = render(<AddExpensePage />)
		expect(getAllByText('Add Expense')).toBeInTheDocument
		await userEvent.type(getByPlaceholderText('Amount'), '123')
		await userEvent.type(getByPlaceholderText('Description'), 'rent')
		await userEvent.click(getByTestId('submit'))
		expect(manageOnSubmit).toHaveBeenCalledWith('add', expect.any(Function), expect.any(Function), {
			amount: 123,
			createdAt: expect.any(Date),
			description: 'rent',
			note: ''
		})
	})
})
