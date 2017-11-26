import React from 'react';
import { connect } from 'react-redux';

import ExpenseItem from './ExpenseItem'
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
        {
            props.expenses.length === 0 ? (
                <div className="list-item--message">
                    <span>Add a new expense to begin ...</span>
                </div>
            ) : (
                props.expenses.map((e)=>{
                    return <ExpenseItem {...e} key={e.id}/>
                })
            )
        }
        </div>  
    </div>
)
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters),
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseList);