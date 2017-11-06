import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { addExpense } from '../actions/expenses';

export default class ExpenseForm extends React.Component{
    state = {
        description:'',
        amount:0,
        note:'',
        createdAt: moment(),
        calendarFocused: false
    }
    descriptionChange=(e)=>{
        const description = e.target.value;
        this.setState(()=>({description}))
    }
    noteChange=(e)=>{
        const note = e.target.value;
        this.setState(()=>({note}));
    }
    amountChange=(e)=>{
        const amount = e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(()=>({amount}));
        }
    }
    dateChange=(createdAt)=>{
        this.setState(()=>({createdAt}))
    }
    focusChange=({focused})=>{
        this.setState(()=>({calendarFocused: focused}));
    }
    render(){
        return (
            <div>
                <form>
                   <input 
                   type="text" 
                   placeholder="description" 
                   value = {this.state.description}
                   onChange={this.descriptionChange}
                   autoFocus/>
                   <input 
                   type="text" 
                   placeholder="Amount"
                   value={this.state.amount}
                   onChange={this.amountChange}
                   />
                   <SingleDatePicker
                   date={this.state.createdAt}
                   onDateChange={this.dateChange}
                   focused={this.state.calendarFocused}
                   onFocusChange={this.focusChange}
                   numberOfMonths={1}
                   isOutsideRange={()=> false}
                    />
                   <textarea 
                   placeholder="Add a note..."
                   value={this.state.note}
                   onChange={this.noteChange}
                   >
                   </textarea>
                   <button>Add Expense</button>
                </form>
            </div>
        )
    }
}