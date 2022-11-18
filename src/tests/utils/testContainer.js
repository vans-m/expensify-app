import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureStore from '../../store/configureStore'

const store = configureStore();

const TestContainer = ({ children }) => {
	return (
		<Provider store={store}>
			<BrowserRouter>{children}</BrowserRouter>
		</Provider>
	)
}

export default TestContainer
