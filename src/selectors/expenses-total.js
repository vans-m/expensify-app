const getExpensesTotal = (expenses) =>
	expenses.map((expense) => expense.amount).reduce((total, currentValue) => total + currentValue, 0)

export default getExpensesTotal
