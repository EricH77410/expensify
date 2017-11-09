import React from 'react'
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses'

import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) =>  {
    return (
        <div>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(e)=>{
                    props.dispatch(editExpense(props.expense.id,e))
                    props.history.push('/')
                }}
            />
            <button onClick={
                ()=>{
                    props.dispatch(removeExpense({id:props.expense.id}))
                    props.history.push('/')
                }
            }>Remove</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((e)=>e.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage)