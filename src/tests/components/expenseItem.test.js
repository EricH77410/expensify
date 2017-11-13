import React from 'react'
import { shallow } from 'enzyme'
import ExpenseItem from '../../components/ExpenseItem';

import expenses from '../fixtures/expenses';

test('should render an expense item correctly', () =>{
   const wrapper = shallow(<ExpenseItem {...expenses[1]}/>);
   expect(wrapper).toMatchSnapshot();
})