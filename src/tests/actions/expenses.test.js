
import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('shoulb setup remove expense action', () => {
    const action = removeExpense({ id: '123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense action', () =>{
    const action = editExpense('123abc',
    {
        description: 'Test',
        amount: 1200
    });
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id: '123abc',
        update: {
            description: 'Test',
            amount: 1200
        } 
    })
})

test('should setup add expense',()=>{
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'this a test rent'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should setup add expense with default value', () => {
    const data = {
            id: expect.any(String),
            description:'',
            note:'',
            amount:0,
            createdAt:0
        }
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {...data}
    })
})