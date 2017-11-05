import React from 'react';
import { connect } from 'react-redux';

import ExpenseItem from './ExpenseItem'
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (

    <div>
        <h1>Expense List</h1>
        {props.expenses.map((e)=>{
            return <ExpenseItem {...e} key={e.id}/>
        })}
        
    </div>
)
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters),
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseList);