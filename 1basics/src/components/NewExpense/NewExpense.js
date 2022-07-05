import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';

export default function NewExpense(props){

    const onFormSubmission = (expenseData) => {
        const expenseNewData = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onFormSubmissionApp(expenseNewData);
    }

    return(
        <div className='new-expense'>
            <NewExpenseForm onFormSubmission={onFormSubmission}/>
        </div>
    );
}