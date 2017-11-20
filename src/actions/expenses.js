
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => {
    return {
        type: 'ADD_EXPENSE',
        expense
    }
}

export const startAddExpense = (expenseData = {})=>{
   return (dispatch)=>{
    const {
        description='',
        note='',
        amount=0,
        createdAt=0
    } = expenseData
    const expense = {description, note, amount, createdAt}
    
    return database.ref('expenses').push(expense)
        .then((snap)=>{dispatch(addExpense({
            id: snap.key,
            ...expense
        }))})
   }
}
// REMOVE_EXPENSE
export const removeExpense = ({id}) => {
    return {
        type:'REMOVE_EXPENSE',
        id
    }
}
// ASYNC
export const startRemoveExpense = ({id})=>{
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove()
            .then(()=>{
                dispatch(removeExpense({id}))
            })
    }
}

// EDIT_EXPENSE
export const editExpense = (id,update) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        update
    }
}

// SET EXPENSES
export const setExpenses = (expenses) => {
    return {
        type: 'SET_EXPENSES',
        expenses
    }
}

export const startSetExpenses = () => {
    return (dispatch) => {
        const expenses = [];

        return database.ref('expenses').once('value').then((snap)=>{
            snap.forEach((childSnap)=>{
                expenses.push({
                    id:childSnap.key,
                    ...childSnap.val()
                })
            })
        }).then(()=>{
            dispatch(setExpenses(expenses));
        })
    }
}


