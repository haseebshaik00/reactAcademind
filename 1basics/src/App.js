import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expense = [
    {
      id: 1,
      name: "Car Insurance",
      date: new Date(2022, 5, 4),
      price: 100
    },
    {
      id: 2,
      name: "Laundry",
      date: new Date(2022, 3, 10),
      price: 133
    },
    {
      id: 3,
      name: "House",
      date: new Date(2022, 1, 12),
      price: 140
    }
  ];

  const onFormSubmissionApp = (expenseData) => {
      expense.push(expenseData);
      console.log("hi");
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
