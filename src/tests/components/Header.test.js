import React from 'react'
import { render } from '../utils/customRender'
import Header from '../../components/Header'

test('Should render Header correctly', () => {
	const { getByText } = render(<Header  />)
	expect(getByText('Expensify')).toBeInTheDocument
	expect(getByText('Dashboard')).toBeInTheDocument
	expect(getByText('Create Expense')).toBeInTheDocument
	expect(getByText('Help')).toBeInTheDocument
})
