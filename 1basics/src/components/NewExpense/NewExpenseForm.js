import { useState } from 'react';
import ExpenseDate from '../Expenses/ExpenseDate';
import './NewExpenseForm.css';

export default function NewExpenseForm(props){

    const [inputData, setInputData] = useState({
        inputTitle: '',
        inputPrice: '',
        inputDate: ''
    });

    const titleChangeHandler = (event) => {
        setInputData((prevState) => {
            return {
                ...prevState,
                inputTitle: event.target.value
            }
        });
    }

    const priceChangeHandler = (event) => {
        setInputData((prevState) => {
            return {
                ...prevState,
                inputPrice: event.target.value
            }
        });
    }

    const dateChangeHandler = (event) => {
        setInputData((prevState) => {
            return {
                ...prevState,
                inputDate: event.target.value
            }
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const data = {
            expenseTitle: inputData.inputTitle,
            expensePrice: inputData.inputPrice,
            expenseDate: inputData.inputDate
        }
        setInputData(() => {
            return {
                inputTitle: '',
                inputPrice: '',
                inputDate: ''
            }
        });
        props.onFormSubmission(data);
    }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={inputData.inputTitle} onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value={inputData.inputPrice} onChange={priceChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={inputData.inputDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};