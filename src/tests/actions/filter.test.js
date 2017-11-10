import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, sortBy } from '../../actions/filters'

test('should generate set start date action', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })
})

test('should generate set end date action', ()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })
})

test('should setup the text filter', ()=>{
    const action = setTextFilter('term');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        term: 'term'
    })
})

test('should setup action filter default', () =>{
    const action=setTextFilter('');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        term:''
    })
})

test('should set sortBy date action', ()=>{
    const action=sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should setup sortByAmout action', ()=>{
    const action=sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})