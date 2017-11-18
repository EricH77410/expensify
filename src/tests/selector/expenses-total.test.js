import getExpensesTotal from '../../selectors/expenses-total';
import moment from 'moment';

const expenses = [
    {
        id:'1',
        description: 'Gum',
        note:'',
        amount: 195,
        createdAt:0
    },
    {
        id:'2',
        description:'Rent',
        note:'',
        amount: 109500,
        createdAt: moment(0).subtract(4,'days').valueOf()
    },
    {
        id:'3',
        description:'Credit Card',
        note:'',
        amount: 4500,
        createdAt: moment(0).add(4,'days').valueOf()
    }
]

test('should return 0 if no expenses provided', ()=>{
    const total = getExpensesTotal([]);
    expect(total).toBe(0);
})

test('should add a single expense provided', () => {
    const total = getExpensesTotal([expenses[1]]);
    expect(total).toBe(109500)
})

test('should return the total of the expenses provided', () => {
    const total = getExpensesTotal(expenses);
    expect(total).toBe(114195)
})