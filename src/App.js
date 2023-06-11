import Expenses from './components/Expenses/Expenses'
import './components/NewExpense/NewExpense'
import NewExpense from './components/NewExpense/NewExpense'
import {useState} from 'react'
//props is the parameter to the function, it is the object that holds all the key values pairs for the arguents here

const DUMMY_Expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const[expenses,setExpenses] = useState(DUMMY_Expenses);
 
  const addExpenseHandler = (expense)=>{
    //setExpenses([expense, ...expenses]);//instead of this because its not good to pass the previous state
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }
  return(
    <div>
    <NewExpense onAddExpense = {addExpenseHandler}/>
    <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
