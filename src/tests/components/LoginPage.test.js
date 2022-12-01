import React from 'react'
import { render } from '../utils/customRender'
import { LoginPage } from '../../components/LoginPage'

test('Should render LoginPage correctly', () => {
	const { getByText } = render(<LoginPage />)
	expect(getByText('Login')).toBeInTheDocument
})
