import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('should render ExpenseSummary correctly with 1 expense', ()=>{
    const wrapper = shallow(<ExpenseSummary expensesCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary correctly with multiple expenses', ()=>{
    const wrapper = shallow(<ExpenseSummary expensesCount={23} expensesTotal={12543600}/>);
    expect(wrapper).toMatchSnapshot();
});