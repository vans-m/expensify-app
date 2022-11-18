

//watch for state changes
store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: 'rent', note: 'final payment', amount: 54500 }))
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 500 }))

//store.dispatch(removeExpense({ id: expenseTwo.expense.id }))

store.dispatch(editExpense(expenseOne.expense.id, { amount: 670 }))

store.dispatch(setTextFilter('rent'))
store.dispatch(setTextFilter())

store.dispatch(sortByAmount())
store.dispatch(sortByDate())

store.dispatch(setStartDate(125))
store.dispatch(setStartDate())
store.dispatch(setEndDate(1250))
