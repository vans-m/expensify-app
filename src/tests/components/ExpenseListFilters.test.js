import React from 'react'
import { render } from '../utils/customRender'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import userEvent from '@testing-library/user-event'
import { filters, altFilters } from '../fixtures/filters'
import manageOnDateChange from '../../form-actions/manageOnDateChange'

jest.mock('../../form-actions/manageOnDateChange')

const dispatchSpy = jest.fn()

describe('ExpenseListFilters', () => {
	test('Should render ExpenseListFilters correctly', () => {
		const { getByPlaceholderText, getByDisplayValue } = render(<ExpenseListFilters filters={filters} />)
		expect(getByPlaceholderText('Search expenses')).toBeInTheDocument
		expect(getByDisplayValue('Date')).toBeInTheDocument
		expect(getByPlaceholderText('Select start date')).toBeInTheDocument
		expect(getByPlaceholderText('Select end date')).toBeInTheDocument
	})
	test('Should render ExpenseListFilters with text filters', async () => {
		const { getByPlaceholderText } = render(<ExpenseListFilters filters={filters} dispatch={dispatchSpy} />)
		await userEvent.type(getByPlaceholderText('Search expenses'), altFilters.text)

		altFilters.text.split('').forEach((letter) => {
			expect(dispatchSpy).toHaveBeenCalledWith({ type: 'SET_TEXT_FILTER', text: letter })
		})
	})

	test('Should render ExpenseListFilters with sorting filters', async () => {
		const { getByText, getByTestId } = render(<ExpenseListFilters filters={filters} dispatch={dispatchSpy} />)
		await userEvent.selectOptions(getByTestId('options'), 'amount')

		expect(getByText('Amount')).toBeInTheDocument
		expect(dispatchSpy).toHaveBeenCalledWith({ type: 'SORT_BY_AMOUNT' })

		await userEvent.selectOptions(getByTestId('options'), 'date')
		expect(getByText('Date')).toBeInTheDocument
		expect(dispatchSpy).toHaveBeenCalledWith({ type: 'SORT_BY_DATE' })
	})
	test('Should render ExpenseListFilters with date filters', async () => {
		const { getByPlaceholderText } = render(<ExpenseListFilters filters={filters} dispatch={dispatchSpy} />)
		const startDateInput = getByPlaceholderText('Select start date')
		const endDateInput = getByPlaceholderText('Select end date')

		await userEvent.type(startDateInput, '12/11/2022')
		expect(startDateInput).toHaveValue('12/11/2022')
		expect(manageOnDateChange).toHaveBeenCalledWith('start', new Date('11/12/2022'), expect.any(Function))
		await userEvent.type(endDateInput, '20/11/2022')
		expect(endDateInput).toHaveValue('20/11/2022')
	})
})
