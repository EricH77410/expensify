import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done)=>{
    const expensesData = {};
    expenses.forEach(({id, description, note, amount, createdAt})=>{
        expensesData[id] = {description,note,amount,createdAt}
    })
    database.ref('expenses').set(expensesData).then(()=>done());
})

test('should setup remove expense action', () => {
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
    
    const action = addExpense(expenses[1])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenses[1]
        }
    })
})

// test('should setup add expense with default value', () => {
//     const data = {
//             id: expect.any(String),
//             description:'',
//             note:'',
//             amount:0,
//             createdAt:0
//         }
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {...data}
//     })
// })

// Asynchronous test
test('should add expense to database and store', (done)=>{
    const store = createMockStore({});
    const expenseData = {
        description: 'Mock store',
        amount: 4590,
        note: 'test mock store',
        createdAt: 1578900
    }

    store.dispatch(startAddExpense(expenseData))
        .then(()=>{
            const actions = store.getActions();
            expect(actions[0]).toEqual({
               type: 'ADD_EXPENSE',
               expense: {
                   id: expect.any(String),
                   ...expenseData
               }
            });
            return database.ref(`expenses/${actions[0].expense.id}`).once('value')
        }).then((snap)=>{
            expect(snap.val()).toEqual(expenseData)
            done();
        })
})

test('should add expense with default to database and store', (done)=>{
    const store = createMockStore({});

    store.dispatch(startAddExpense({}))
        .then(()=>{
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    description:'',
                    note:'',
                    amount:0,
                    createdAt:0,
                    id:expect.any(String)
                }
            })
            return database.ref(`expenses/${actions[0].expense.id}`).once('value')
        }).then((snap)=>{
            expect(snap.val()).toEqual({description:'',note:'',amount:0,createdAt:0})
            done()
        })
})

test('should setup setExpenses action with data', ()=>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses
    })
})

test('should fetch the expenses from firebase', (done)=>{
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done()
    })
})

test('should remove an expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[1].id
    store.dispatch(startRemoveExpense({id}))
        .then(()=>{
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'REMOVE_EXPENSE',
                id
            })
            return database.ref(`expenses/${id}`).once('value');
        }).then((snap) => {
            expect(snap.val()).toBeFalsy()
            done()
        })
        
})