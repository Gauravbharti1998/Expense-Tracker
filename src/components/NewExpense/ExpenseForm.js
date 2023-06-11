
import './ExpenseForm.css'
import { useState } from 'react';
//we need three input fields date title and amount
const ExpenseForm =(props) =>{

    const [enteredTitle, setEnteredTitle]= useState('');
    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
    }
    const [enteredAmount, setEnteredAmount]= useState('');
    const AmountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    }
    const [enteredDate, setEnteredDate]= useState('');
    const DateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault();  //it takes the data from the form and passes it up as a parameter

        const expenseData = {
            title: enteredTitle,
            amount : enteredAmount,
            date: new Date(enteredDate) //now we have to pass this expense data to upper level ie NewExpense
        };
        //console.log(expenseData);
        //all we received in props was the pointer to function. because we want to pass values from this to that function
        props.onSaveExpenseData(expenseData);  //this value will be passed to NewExpense as a new parameter
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    return(
    <form onSubmit = {submitHandler}>
        <div className ='new-expense__controls'>
            <div className = 'new-expense__control'>
            <label>Title</label>
            <input type = 'text' value = {enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className = 'new-expense__control'>
            <label>Amount </label>
            <input type = 'number' value = {enteredAmount} min = '0.01' step = '0.01' onChange = {AmountChangeHandler} />
            </div>
            <div className = 'new-expense__control'>
            <label>Date</label>
            <input type = 'date' value= {enteredDate} min = '2019-01-01' max='2023-01-16' onChange={DateChangeHandler}/>
            </div>
        </div>
        <div className = 'new-expense__actions'>
            <button type = 'button' onClick = {props.onCancel}> Cancel </button>
            <button type = 'submit'>Add Expense</button>
        </div>
    </form>
    );
};
export default ExpenseForm