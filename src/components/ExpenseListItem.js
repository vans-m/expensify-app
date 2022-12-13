import React from 'react'
import { NavLink } from 'react-router-dom'
import numeral from 'numeral'

const ExpenseListItem = ({ id, description, note, amount, createdAt }) => (
	<NavLink className="list-item" data-testid="expense-element" to={`/edit/${id}`}>
		<div>
			{<h3 className="list-item__title">{description}</h3>}
			{createdAt && (
				<span className="list-item__sub-title">
					{new Date(createdAt).toLocaleDateString('en-GB', {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}
				</span>
			)}
		</div>
		<div>{<h3 className="list-item__data">£{numeral(amount).format('0,0.00')}</h3>}</div>
	</NavLink>
)

export default ExpenseListItem
