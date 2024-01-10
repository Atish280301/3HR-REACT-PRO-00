import React, { useState } from 'react';
import Card from '../UserInterface/Card';
import Button from '../UserInterface/Button';
const Adduser = (props) => {
    const [EnteredUserName, SetEnteredUserName] = useState('');
    const [EnteredUserAge, SetEnteredUserAge] = useState('');
    const AddUserHandler = (event) => {
        event.preventDefault();
        if(EnteredUserName.trim().length === 0 || EnteredUserAge.trim().length === 0){
            return;
        }
        if(+EnteredUserAge < 1){
            return;
        }
        console.log(EnteredUserName, EnteredUserAge);
        props.OnAddUser(EnteredUserName, EnteredUserAge);
        SetEnteredUserName('');
        SetEnteredUserAge('');
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
                    value = {EnteredUserName}
                    onChange={UserNameChangeHandler}
                />
                <label htmlFor='userage'>User Age:</label>
                <input 
                    type = "number"
                    id = "UserAge"
                    value = {EnteredUserAge}
                    onChange={UserAgeChangeHandler}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Card>
    );
}
export default Adduser;