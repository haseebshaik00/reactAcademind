import Card from '../../UI/Card';
import Button from '../../UI/Button';
import './UserInput.css';
import { useState } from "react";

const UserInput = (props) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const onChangeName = (event) => {setName(event.target.value);};
    const onChangeAge = (event) => {setAge(event.target.value);};

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const newUser = {
            name: name,
            age: age
        }
        if(name.trim().length === 0 || age.trim().length === 0)
            return;
        props.onSubmitForm(newUser);
        setName('');
        setAge('');
    }

    return(
            <Card className='input'>
                    <form onSubmit={onSubmitHandler}>
                        <label>Name : </label>
                        <input type="text" value={name} onChange={onChangeName}/><br /><br />
                        <label>Age : </label>
                        <input type="number" value={age} onChange={onChangeAge}/><br /><br />
                        <Button type='submit'>SUBMIT</Button>
                    </form>
            </Card>

    );
};

export default UserInput;