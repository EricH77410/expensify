import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses'
import numeral from 'numeral';

export const ExpenseSummary = ({expensesCount, expensesTotal}) => {
    const word = expensesCount > 1 ? 'expenses' : 'expense'
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {word} totalling <span>{numeral(expensesTotal/100).format('$0,0.00')}</span></h1>
                <div className="page-header__actions">
                    <Link className="button" to='/create'>Add expense</Link>
                </div>
            </div>
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