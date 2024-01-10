import React, { useState } from 'react';
import Card from '../UserInterface/Card';
import Button from '../UserInterface/Button';
const Adduser = () => {
    const [EnteredUserName, SetEnteredUserName] = useState('');
    const [EnteredUserAge, SetEnteredUserAge] = useState('');
    const AddUserHandler = (event) => {
        event.preventDefault();
        console.log(EnteredUserName, EnteredUserAge);
    }
    const UserNameChangeHandler = (event) =>{
        SetEnteredUserName(event.target.value);
    }
    const UserAgeChangeHandler = (event) =>{
        SetEnteredUserAge(event.target.value);
    }
    return(
        <Card className="Big-Box">
            <form onSubmit={AddUserHandler}>
                <label htmlFor='username'>User Name:</label>
                <input 
                    type = "text"
                    id = "UserName"
                    onChange={UserNameChangeHandler}
                />
                <label htmlFor='userage'>User Age:</label>
                <input 
                    type = "number"
                    id = "UserAge"
                    onChange={UserAgeChangeHandler}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Card>
    );
}
export default Adduser;