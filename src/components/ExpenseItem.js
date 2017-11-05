import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseItem = ({id, description, amount, createdAt, dispatch}) => {
    return (
        <div>
            <h3>{description}</h3>
            <p>{amount} - {createdAt}</p>
            <button onClick={
                ()=>{
                    dispatch(removeExpense({id}))
                }
            }>Remove</button>
            <hr/>
        </div>
    )
}

export default connect()(ExpenseItem);