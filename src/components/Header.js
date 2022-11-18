import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
	<header>
		<div className="container">
			<h1>Expensify</h1>
			<NavLink
				to="/"
				className={({ isActive }) => (isActive ? 'active-link' : '')}
			>
				Dashboard
			</NavLink>
			<NavLink
				to="/create"
				className={({ isActive }) => (isActive ? 'active-link' : '')}
			>
				Create Expense
			</NavLink>
			<NavLink
				to="/help"
				className={({ isActive }) => (isActive ? 'active-link' : '')}
			>
				Help
			</NavLink>
		</div>
	</header>
)

export default Header
