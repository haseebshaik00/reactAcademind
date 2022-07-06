import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

export default function ExpenseItem(props){

    const [title, setTitle] = useState(props.expenseTitle);

    const titleHandler = () => {
        setTitle("clicked!");
        console.log(title);
    }

    return(
        <li>
            <Card className="expense-item">
                <ExpenseDate expenseDate={props.expenseDate}/>
                    <div className="expense-item__description">
                        <h2>{title}</h2>
                        <div className="expense-item__price">$ {props.expensePrice}/-</div>
                    </div>
            </Card>
        </li>
    );

}