import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = () => (
	<header>
		<div className="container">
			<h1>Expensify</h1>
			<NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active-link' : '')}>
				Dashboard
			</NavLink>
			<NavLink to="/create" className={({ isActive }) => (isActive ? 'active-link' : '')}>
				Create Expense
			</NavLink>
			<button onClick={startLogout}>Logout</button>
		</div>
	</header>
)

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => {
		dispatch(startLogout())
	}
})

export default connect(undefined, mapDispatchToProps)(Header)
