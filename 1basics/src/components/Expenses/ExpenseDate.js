import Card from '../UI/Card';
import './ExpenseDate.css';

export default function ExpenseDate(props){

    const dateMonth = props.expenseDate.toLocaleString('en-US', {month: "long"});
    const dateDay = props.expenseDate.toLocaleString('en-US', {day: "2-digit"});
    const dateYear = props.expenseDate.getFullYear();

    return(
            <Card className="expense-date">
                <div className="expense-date__month">{dateMonth}</div>
                <div className="expense-date__day">{dateDay}</div>
                <div className="expense-date__year">{dateYear}</div>
            </Card>
    );
}