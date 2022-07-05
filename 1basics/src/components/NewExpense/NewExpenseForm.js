import { useState } from 'react';
import ExpenseDate from '../Expenses/ExpenseDate';
import './NewExpenseForm.css';

export default function NewExpenseForm(props){

    const [inputData, setInputData] = useState({
        inputTitle: '',
        inputPrice: '',
        inputDate: ''
    });

    const newInputData = {
        inputTitle: '',
        inputPrice: '',
        inputDate: ''
    };

    const titleChangeHandler = (event) => {
        newInputData.inputTitle= event.target.value;
        newInputData.inputPrice = inputData.inputPrice;
        newInputData.inputDate = inputData.inputDate;
        console.log(newInputData);
        setInputData(newInputData);
    }

    const priceChangeHandler = (event) => {
        newInputData.inputPrice= event.target.value;
        newInputData.inputTitle = inputData.inputTitle;
        newInputData.inputDate = inputData.inputDate;
        console.log(newInputData);
        setInputData(newInputData);
    }

    const dateChangeHandler = (event) => {
        newInputData.inputDate= event.target.value;
        newInputData.inputTitle = inputData.inputTitle;
        newInputData.inputPrice = inputData.inputPrice;
        console.log(newInputData);
        setInputData(newInputData);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const data = {
            expenseTitle: inputData.inputTitle,
            expensePrice: inputData.inputPrice,
            expenseDate: new Date(inputData.inputDate)
        }
        setInputData(() => {
            return {
                inputTitle: '',
                inputPrice: '',
                inputDate: ''
            }
        });
        props.onFormSubmission(data);
        console.log(data);
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