import React from 'react'
import { connect } from 'react-redux'
import getExpensesTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral'

export const ExpenseSummary = ({ expenses }) => (
	<div>
		<h1 data-testid="summary">
			Viewing {expenses.length} {expenses.length === 1 ? 'expense' : 'expenses'} totalling £
			{numeral(getExpensesTotal(expenses)).format('0,0.00')}
		</h1>
	</div>
)

const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters)
	}
}

export default connect(mapStateToProps)(ExpenseSummary)
