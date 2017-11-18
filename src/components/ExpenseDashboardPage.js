import React from 'react'
import ExpenseList from './ExpenseList';
import ExpenseFilter from './ExpenseFilter';
import ExpenseSummary from './ExpenseSummary';

const ExpenseDashboardPage = ()=>(
    <div>
        <ExpenseSummary />
        <ExpenseFilter />
        <ExpenseList/>
    </div>
)

export default ExpenseDashboardPage