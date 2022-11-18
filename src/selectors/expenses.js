// get visible expenses - expense selector
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = startDate ? isSameOrBefore(startDate, expense.createdAt) : true
        const endDateMatch = endDate ? isSameOrAfter(endDate, expense.createdAt) : true
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? -1 : 1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
            }
        }
    )
}


const isSameOrBefore = (start, date) => {
    return date >= start
}

const isSameOrAfter = (end, date) => {
    return date <= end
}
