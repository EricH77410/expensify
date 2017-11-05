import { createStore } from 'redux'

const incrementCount = ({ incrementBy = 1 }={}) => {
    return {
        type: 'INCREMENT',
        incrementBy
    }
}

const decrementCount = ({decrementBy = 1}={}) => {
    return {
        type: 'DEC',
        decrementBy
    }
}

const resetCount = () => {
    return {
        type:'RESET'
    }
}

const setCount = ({count = 0}={}) => {
    return {
        type:'SET',
        count
    }
}

const applyDiscount = ({discount = 10}={})=>{
    return {
        type:'DISCOUNT',
        discount
    }
}

// Reducers
const countReducer = (state = { count: 100 }, action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DEC':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'DISCOUNT':
            return {
                count: state.count - (state.count * action.discount) / 100 
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state
    }
}

const store = createStore(countReducer)

const stop  = store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(incrementCount({incrementBy:200}));
store.dispatch(incrementCount());
store.dispatch(resetCount())
store.dispatch(decrementCount())
store.dispatch(decrementCount({decrementBy:75}))
store.dispatch(setCount({count: 150}))
store.dispatch(applyDiscount({discount: 40}));
store.dispatch(setCount({count:400}))


