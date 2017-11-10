import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([]);
})

test('should remove expense by id', ()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([expenses[0],expenses[2]])
})

test('should not remove expense by id if id not found', ()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: 'àçàçàç'
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const action = {
        type:'ADD_EXPENSE',
        expense: {
            id:'123aze',
            description: 'new expense',
            amount: 12300,
            createdAt: 1234500
        }
    }
    const res = expensesReducer(expenses,action);
    expect(res).toEqual([...expenses, action.expense])
})

test('should edit an expense by id', ()=>{
    const action = {
        type: 'EDIT_EXPENSE',
        id: 2,
        update: {
            description:'Banana Cake',
            amount: 4500
        }
    }
    const res = expensesReducer(expenses,action)
    expect(res[1].description).toBe('Banana Cake')
})

test('should not edit expense if not found',()=>{
    const action = {
        type:'EDIT_EXPENSE',
        id:'ytuytu',
        expense: {
            description:'blabla'
        }
    }
    const res = expensesReducer(expenses,action);
    expect(res).toEqual(expenses)
})