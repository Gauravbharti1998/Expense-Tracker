
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react';
const NewExpense = (props) => //it received the pointer to function as a prop from app.js and would pass  to the func
{
    const [isEditing, setIsEditing]=useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) =>{
         //this function will be called n executed thru expenseForm with new parameters
        const expenseData={
            ...enteredExpenseData,
            id : Math.random().toString()// a random number would be generated and passed to expenseform
        };
        //console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler=()=>{
        setIsEditing(true);
    }
    const stopEditingHandler=()=>
    {
        setIsEditing(false);
    }
//this onSaveExpenseData is passed to ExpenseForm as a  pointer to the onSaveExpenseData prop 
//the trick here is pass pointer to the function to do the child->parent relationship
    return(
    <div className = 'new-expense'>   
        {isEditing === false &&<button onClick = {startEditingHandler}> Add New Expense </button>}
        {isEditing === true && 
        (<ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}
         onCancel = {stopEditingHandler}
         />
        )}
    </div>
    );
}

export default NewExpense;