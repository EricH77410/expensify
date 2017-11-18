import React from 'react';
import { connect } from 'react-redux';
import getExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses'
import numeral from 'numeral';

export const ExpenseSummary = ({expensesCount, expensesTotal}) => {
    const word = expensesCount > 1 ? 'expenses' : 'expense'
    return (
        <div>
            <h3>Expense Summary</h3>
            <p>Viewing {expensesCount} {word}</p>
            <p>Total : {numeral(expensesTotal/100).format('$0,0.00')}</p>
        </div>
    )
}

const mapStateToProps = (state)=>{
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary);