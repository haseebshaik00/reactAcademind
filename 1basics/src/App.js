import './App.css';
import Expenses from './components/Expenses';

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
  ]
  return (
    <div>
      <h1>FundX</h1>
      <Expenses expense={expense} />
    </div>
  );
}

export default App;
