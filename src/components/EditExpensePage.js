import React from 'react'
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses'

import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
    onSubmit = (e) => {
        this.props.editExpense(this.props.expense.id,e)
        this.props.history.push('/');
    }
    onRemove = () => {
        this.props.removeExpense({id:this.props.expense.id})
        this.props.history.push('/')
    }
    render(){
        return (
            <div>
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        )
    }
    
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((e)=>e.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch,props) => {
   return {
    editExpense: (id,expense)=>dispatch(editExpense(id,expense)),
    removeExpense: (e)=>dispatch(removeExpense(e))
   } 
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)