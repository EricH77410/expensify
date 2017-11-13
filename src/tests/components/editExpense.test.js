import React from 'react'
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage'

import expenses from '../fixtures/expenses';

let wrapper, editExpense, history, removeExpense, editedExpense;

beforeEach(()=>{
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = {push: jest.fn()}
    wrapper = shallow(<EditExpensePage expense={expenses[0]} removeExpense={removeExpense} editExpense={editExpense} history={history}/>);
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
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id,editedExpense);
})

test('should removeExpense', ()=>{
    wrapper.find('button').simulate('click');
    expect(removeExpense).toHaveBeenLastCalledWith({id:expenses[0].id});
    expect(history.push).toHaveBeenLastCalledWith('/')
})