import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';


export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            description:props.expense ? props.expense.description:'',
            amount:props.expense ? (props.expense.amount / 100).toString():'',
            note:props.expense? props.expense.note:'',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error:''
        }
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
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount}));
        }
    }
    dateChange=(createdAt)=>{
        if (createdAt) {
            this.setState(()=>({createdAt}))
        }
        
    }
    focusChange=({focused})=>{
        this.setState(()=>({calendarFocused: focused}));
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(()=>({error:'Please provide description and amount'}))
        } else {
            this.setState(()=>({error:''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount,10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    render(){
        return (
            <form onSubmit={this.onSubmit} className="form">
                {this.state.error && <p className="form__error">{this.state.error}</p>}
               <input className="text-input"
               type="text" 
               placeholder="description" 
               value = {this.state.description}
               onChange={this.descriptionChange}
               autoFocus/>
               <input className="text-input"
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
               <textarea className="textarea"
               placeholder="Add a note..."
               value={this.state.note}
               onChange={this.noteChange}
               >
               </textarea>
               <div>
                <button className="button">Save Expense</button>
               </div>
               
            </form>
        )
    }
}