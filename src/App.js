import React, { useState } from 'react';
import AddUser from './components/Users/AddUser.js';
import UsersList from './components/Users/UsersList.js';

const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'Conor Mcgregor',
    age: 35
  },
  {
    id: 'u2',
    name: 'Harry Kane',
    age: 28
  },  
  {
    id: 'u3',
    name: 'Alex Pereira',
    age: 33
  }
];

function App() {
  const [usersList, setUsersList] = useState(DUMMY_USERS);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [{ id: Math.random().toString(), name: userName, age: userAge }, ...prevUsersList];
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </React.Fragment>
  );
}

export default App;
