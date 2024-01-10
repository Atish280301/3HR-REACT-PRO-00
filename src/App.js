import React, { useState } from 'react';
import Adduser from './Components/AddUser/Adduser';
import UserList from './Components/AddUser/UsersList';
function App() {
  const [userList, SetUserList] = useState([]);
  const AddUserHandler = (UName, UAge) => {
    SetUserList((PrevUserList) => {
      return [...PrevUserList, 
        {name: UName, age: UAge, id: Math.random().toString()}];
    });
  }
  return (
    <div>
      <Adduser 
        OnAddUser = {AddUserHandler}
      />
      <UserList users={userList}/>
    </div>
  );
}

export default App;
