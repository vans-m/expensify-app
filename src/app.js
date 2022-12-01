import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { unstable_batchedUpdates } from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-datepicker/dist/react-datepicker.css'
import './firebase/firebase'
import 'redux-thunk'
import { startSetExpenses } from './actions/expenses'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebase'
import { login, logout } from './actions/auth'

const store = configureStore()

const App = () => {
	const [gUser, setGUser] = useState(undefined)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			unstable_batchedUpdates(() => {
				setGUser(user)
				if (user) {
					store.dispatch(login(auth.currentUser.uid))
					store.dispatch(startSetExpenses())
					setLoading(false)
				} else {
					store.dispatch(logout())
					setLoading(false)
				}
			})
		})

		return unsub
	}, [])

	if (loading) {
		return <div>Loading...</div>
	}

	return (
		<Provider store={store}>
			<AppRouter user={gUser} />
		</Provider>
	)
}

const root = createRoot(document.getElementById('app'))
root.render(<App />)
