import React, { useState } from 'react';
import UserInput from './Components/Users/UserInput/UserInput';
import UserList from './Components/Users/UserList/UserList';

function App() {

  const [user, setUser] = useState([
    {name: 'Haseeb', age: 21, id: '1'},
    {name: 'Kunal', age: 20, id: '2'}
  ]);

  const onSubmitForm = (userInput) => {
    setUser( prevUser => {
      const newUserArray = [...prevUser];
      newUserArray.unshift({name: userInput.name, age: userInput.age, id: Math.random().toString()});
      return newUserArray;
    });
  };

  const onDeleteItem = (userID) => {
    setUser( prevUser => {
      const newUserArray = prevUser.filter(userItem => userItem.id !== userID);
      return newUserArray;
    }); 
  };

  return (
    <div>
        <UserInput onSubmitForm={onSubmitForm} />
        <UserList users={user} onDeleteItem={onDeleteItem} />
    </div>
  );
}

export default App;