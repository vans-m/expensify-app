import React from 'react'
import { NavLink } from 'react-router-dom'
import numeral from 'numeral'

const ExpenseListItem = ({ id, description, note, amount, createdAt }) => (
	<div>
		<NavLink data-testid="expense-element" to={`/edit/${id}`}>
			{<h3>{description}</h3>}
			{note && <p>Note: {note}</p>}
			{<p>£{numeral(amount).format('0,0.00')}</p>}
			{createdAt && (
				<p>
					{new Date(createdAt).toLocaleDateString('en-GB', {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}
				</p>
			)}
		</NavLink>
	</div>
)

export default ExpenseListItem
