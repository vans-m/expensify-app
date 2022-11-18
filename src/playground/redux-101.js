import { createStore } from 'redux'

const incrementCount = ({ incrementBy = 1 } = {}) => ({ 
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count }) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy}
        case 'RESET':
            return { count: 0}
        case 'DECREMENT':
            return { count: state.count - action.decrementBy}
        case 'SET':
            return { count: action.count }
        default:
            return state
    }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

unsubscribe()

// increment the count
store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

//reset the count
store.dispatch(resetCount())

//decrememnt the count
store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 10 }))

//set the count
store.dispatch(setCount({ count: 101 }))



// //Object destructuring
// const book = {
//     title: 'Book Title',
//     author: 'Book Author',
//     publisher: {
//         name: 'Book publisher'
//     }
// }

// const { name: publisherName = 'Self-published' } = book.publisher

// console.log(publisherName)

// //Array destructuring
// const item = ['Coffee', '£2.00', '£2.50', '£2.75']

// const [beverage, , medium] = item

// console.log(`A medium ${beverage} costs ${medium}`)