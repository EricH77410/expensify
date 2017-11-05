import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = ({ description='', note='', amount=0, createdAt = 0 } = {}) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
}
// REMOVE_EXPENSE
const removeExpense = ({id}) => {
    return {
        type:'REMOVE_EXPENSE',
        id
    }
}
// EDIT_EXPENSE
const editExpense = (id,update) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        update
    }
}
// SET_TEXT_FILTER
const setTextFilter = (term='') => {
    return {
        type: 'SET_TEXT_FILTER',
        term
    }
}
// SORT_BY_DATE
const sortByDate = () => {
    return {
        type:'SORT_BY_DATE'
    }
}
// SORT_BY_AMOUNT
const sortByAmout = () => {
    return {
        type:'SORT_BY_AMOUNT'
    }
}

// SORT_BY (rico)
const sortBy = (term='') => {
    return {
        type:'SORT_BY',
        term
    }
}
// SET_START_DATE
const setStartDate = (date) => {
    return {
        type:'SET_START_DATE',
        date
    }
}
// SET_END_DATE
const setEndDate = (date) => {
    return {
        type:'SET_END_DATE',
        date
    }
}
// Reducers

// Expenses reducer

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
    text:'',
    sortBy: 'date',
    startDate:undefined,
    endDate: undefined
};

const expensesReducer = (state = expensesReducerDefaultState,action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state,action.expense] //state.concat(action.expense)
        case 'REMOVE_EXPENSE':
            return state.filter((e)=>e.id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((e)=>{
                if (e.id === action.id){
                    return {
                        ...e,
                        ...action.update
                    }
                } else {
                    return e
                }
            })
        default:
            return state;
    }
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.term
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY':
            return {
                ...state,
                sortBy: action.term
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            }
        default:
            return state;
    }
}

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((e)=>{
        const startDateMatch = typeof startDate !== 'number' || e.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || e.createdAt <= endDate
        const textMatch = e.description.toLowerCase().includes(text.toLowerCase()) ;

        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b)=>{
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(()=>{
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({
    description: 'rent',
    note: 'Le credit du mois',
    amount: 92500,
    createdAt: -201000
}))

const expenseTwo = store.dispatch(addExpense({
    description: 'Course',
    note: 'Carrefour',
    amount: 14200,
    createdAt: 1000
}))
//store.dispatch(removeExpense({id:expenseOne.expense.id}));

store.dispatch(editExpense(expenseTwo.expense.id, {amount: 123500}))

store.dispatch(setTextFilter('Course'));
store.dispatch(setTextFilter());

store.dispatch(sortByAmout());

// store.dispatch(sortByAmout());
// store.dispatch(sortByDate());
// store.dispatch(sortBy('alpha'))
// store.dispatch(sortBy())

// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate(90000))


