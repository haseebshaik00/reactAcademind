import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';

export default function Expenses(props){

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    return(
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {props.expense.map((eachExpense) => (
                <ExpenseItem expenseTitle={eachExpense.name} expensePrice={eachExpense.price} expenseDate={eachExpense.date} />
            ))}
        </Card>
    );

}