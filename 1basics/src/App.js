import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

import './App.css';

function App() {

  const [expense, setNewExpense] = useState([
    {
      id:1,
      name: 'haseeb',
      date: new Date(2022, 5, 5),
      price: 100
    }
  ]);

  const onFormSubmissionApp = (expenseData) => {
    const newExpenseApp = {
      id: expenseData.id,
      name: expenseData.expenseTitle,
      date: expenseData.expenseDate,
      price: expenseData.expensePrice
    }
      setNewExpense((prevState) => {
        return [newExpenseApp, ...prevState];
      });
      console.log(newExpenseApp);
      console.log(expense);
  }

  return (
    <div>
      <h1>FundX</h1>
      <NewExpense onFormSubmissionApp={onFormSubmissionApp}/>
      <Expenses expense={expense} />
    </div>
  );

  /*
    The above return statement is equivalent to 
      return (React.createElement('div', {}, React.createElement('Expenses', {expense: expense}));
    This is the main reason why we wrap all the content inside a root element - div
  */
}

export default App;
