import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default values', () => {
    const state = filterReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined,{type:'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () =>{
    const currentState = {
        text:'',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = {type:'SORT_BY_DATE'}
    const res = filterReducer(currentState,action)
    expect(res.sortBy).toBe('date')
})

test('should set texFilter', () => {
    const state = {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy: 'date'
    }
    const res = filterReducer(state,{type:'SET_TEXT_FILTER',term:'salut'})
    expect(res.text).toBe('salut')
})

test('should set startDate', ()=>{
    const state = {
        startDate:undefined
    }
    const res = filterReducer(state,{type:'SET_START_DATE',date:moment().startOf('month').valueOf()})
    expect(res.startDate).toBe(moment().startOf('month').valueOf())
})

test('should set endDate', ()=>{
    const state = {
        startDate:undefined,
        endDate: undefined
    }
    const res = filterReducer(state,{type:'SET_END_DATE',date:moment().endOf('month').valueOf()})
    expect(res.endDate).toBe(moment().endOf('month').valueOf())
})

