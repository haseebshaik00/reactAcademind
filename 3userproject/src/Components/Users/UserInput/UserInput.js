import { useRef } from 'react';
import Card from '../../UI/Card';
import Button from '../../UI/Button';
import ErrorModal from '../../UI/ErrorModal'
import './UserInput.css';
import { useState } from "react";

const UserInput = (props) => {

    // const [name, setName] = useState('');
    // const [age, setAge] = useState('');
    
    // const onChangeName = (event) => {setName(event.target.value);};
    // const onChangeAge = (event) => {setAge(event.target.value);};

    const [error, setError] = useState(['', false]);
    const userNameRef = useRef();
    const userAgeRef = useRef();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const newUser = {
            name: userNameRef.current.value,
            age: userAgeRef.current.value
        }
        if(userNameRef.current.value.trim().length === 0 || userAgeRef.current.value.trim().length === 0){
            setError(['Name or Age is Empty!', true]);
            return;
        }
        else if(userAgeRef.current.value < -1){
            setError(['Age is not Valid!', true]);
            return;
        }
        props.onSubmitForm(newUser);
        userNameRef.current.value = '';
        userAgeRef.current.value = '';
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
                        <input type="text" ref={userNameRef}/><br /><br />
                        <label>Age : </label>
                        <input type="number" ref={userAgeRef}/><br /><br />
                        <Button type='submit'>SUBMIT</Button>
                    </form>
            </Card>
        </div>
    );
};

export default UserInput;