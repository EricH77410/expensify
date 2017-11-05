import React from 'react'
import ExpenseList from './ExpenseList';
import ExpenseFilter from './ExpenseFilter';

const ExpenseDashboardPage = ()=>(
    <div>
        <ExpenseFilter />
        <ExpenseList/>
    </div>
)

export default ExpenseDashboardPage