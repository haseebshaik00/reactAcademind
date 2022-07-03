import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

export default function Expenses(props){

    return(
        <Card className="expenses">
            <ExpenseItem expenseTitle={props.expense[0].name} expensePrice={props.expense[0].price} expenseDate={props.expense[0].date}/>
            <ExpenseItem expenseTitle={props.expense[1].name} expensePrice={props.expense[1].price} expenseDate={props.expense[1].date}/>
            <ExpenseItem expenseTitle={props.expense[2].name} expensePrice={props.expense[2].price} expenseDate={props.expense[2].date}/>
        </Card>
    );

}