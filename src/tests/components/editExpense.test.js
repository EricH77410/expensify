import React from 'react'
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage'

import expenses from '../fixtures/expenses';

let wrapper, history, editedExpense, startRemoveExpense, startEditExpense;

beforeEach(()=>{
    startEditExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history = {push: jest.fn()}
    wrapper = shallow(<EditExpensePage expense={expenses[0]} startRemoveExpense={startRemoveExpense} startEditExpense={startEditExpense} history={history}/>);
    editedExpense = {
        note:'Salut'
    }
})

test('should render EditExpense', () =>{
    expect(wrapper).toMatchSnapshot();
})

test('should edit expense with new data', ()=> {
    wrapper.find('ExpenseForm').prop('onSubmit')(editedExpense);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id,editedExpense);
})

test('should removeExpense from firebase', ()=>{
    wrapper.find('button').simulate('click');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id:expenses[0].id});
    expect(history.push).toHaveBeenLastCalledWith('/')
})