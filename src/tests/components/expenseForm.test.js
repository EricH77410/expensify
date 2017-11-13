import React from 'react';
import {shallow} from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('shoul render ExpenseForm correctly', () =>{
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
})
;
test('should render ExpenseForm with expense data', ()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
})

test('should render error for invalid form submission', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit',{
        preventDefault: ()=>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})

test('should set description on input change', () =>{
    const value = 'New description'
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('description')).toBe(value);
})

test('should update the state on input note change', ()=>{
    const value = 'New note'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('textarea').at(0).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('note')).toBe(value);
})

test('should update state with amount', () =>{
    const value = '105.55'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe(value);
})

test('should not update the amout with bad value', ()=>{
    const value = '105.555'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe('');
})

test('should call on submit for valid submission', ()=>{
    const onsubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onsubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: ()=>{}
    })
    expect(wrapper.state('error')).toBe('');
    expect(onsubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    })
})

test('should set new date on date change', ()=>{
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now);
})

test('should set calendarFocus change', ()=>{
    const focused = true
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused})
    expect(wrapper.state('calendarFocused')).toBe(focused)
})