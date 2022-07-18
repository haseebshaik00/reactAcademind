import Card from '../../UI/Card';
import Button from '../../UI/Button';
import ErrorModal from '../../UI/ErrorModal'
import './UserInput.css';
import { useState } from "react";

const UserInput = (props) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState(['', false]);

    const onChangeName = (event) => {setName(event.target.value);};
    const onChangeAge = (event) => {setAge(event.target.value);};

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const newUser = {
            name: name,
            age: age
        }
        if(name.trim().length === 0 || age.trim().length === 0){
            setError(['Name or Age is Empty!', true]);
            return;
        }
        else if(age < -1){
            setError(['Age is not Valid!', true]);
            return;
        }
        props.onSubmitForm(newUser);
        setName('');
        setAge('');
    }

    const errorHandler = () => {
        console.log("hi");
        setError(['', false]);
    }

    const content = () => {
        return error[1] && <ErrorModal title='Error!!' content={error[0]} onConfirm={errorHandler}/>
    }

    return(
        <div>
            { content() }
            <Card className='input'>
                    <form onSubmit={onSubmitHandler}>
                        <label>Name : </label>
                        <input type="text" value={name} onChange={onChangeName}/><br /><br />
                        <label>Age : </label>
                        <input type="number" value={age} onChange={onChangeAge}/><br /><br />
                        <Button type='submit'>SUBMIT</Button>
                    </form>
            </Card>
        </div>
    );
};

export default UserInput;