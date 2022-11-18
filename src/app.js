import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-datepicker/dist/react-datepicker.css'

const store = configureStore()

store.dispatch(addExpense({ description: 'water bill', amount: 2, createdAt: new Date() }))
store.dispatch(addExpense({ description: 'gas bill', amount: 300, createdAt: new Date(2022, 10, 8) }))
store.dispatch(addExpense({ description: 'rent', amount: 15, createdAt: new Date(2022, 9, 30) }))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

const root = createRoot(document.getElementById('app'))
root.render(jsx)
