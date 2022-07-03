import './App.css';
import ExpenseItem from './components/ExpenseItem';

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
      date: new Date(2022, 12, 12),
      price: 140
    }
  ]
  return (
    <div>
      <h1>Haseeb</h1>
      <ExpenseItem expenseTitle={expense[0].name} expensePrice={expense[0].price} expenseDate={expense[0].date}/>
      <ExpenseItem expenseTitle={expense[1].name} expensePrice={expense[1].price} expenseDate={expense[1].date}/>
      <ExpenseItem expenseTitle={expense[2].name} expensePrice={expense[2].price} expenseDate={expense[2].date}/>
    </div>
  );
}

export default App;
