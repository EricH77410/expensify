import React from 'react';
import { connect } from 'react-redux';

import ExpenseItem from './ExpenseItem'
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (

    <div>
        {
            props.expenses.length === 0 ? (
                <p>Add a new expense to begin ...</p>
            ) : (
                props.expenses.map((e)=>{
                    return <ExpenseItem {...e} key={e.id}/>
                })
            )
        }

       
        
    </div>
)
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters),
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseList);