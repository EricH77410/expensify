
import uuid from 'uuid';
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
// EDIT_EXPENSE
export const editExpense = (id,update) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        update
    }
}