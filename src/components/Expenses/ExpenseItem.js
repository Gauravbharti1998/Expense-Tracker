import React from 'react'

import './ExpenseItem.css';
import ExpenseDate  from './ExpenseDate';
import Card from '../UI/Card'
//import { useState } from 'react';

//alternate function syntax
//
const ExpenseItem = (props) =>
//function ExpenseItem(props)
{ 
  //useState is a hook that returns an array with two values- first is the current state value
  // and second is the function to update that. so here title is the current value and setTitle updates it
  //const [title, setTitle]= useState(props.title);
  // function clickHandler()
  // {
  //   setTitle('Updated'); //here we passing the new value to set into the component that we used useState for
  //   console.log('clicked');
  // }
  //this expenseItem is giving props to expensedate 
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;