import React, { useState } from 'react';
import Card from '../UserInterface/Card';
import Button from '../UserInterface/Button';
import ErrorModel from '../UserInterface/ErrorModel';
import Wrapper from '../Helpers/Wrapper';
const Adduser = (props) => {
    const [EnteredUserName, SetEnteredUserName] = useState('');
    const [EnteredUserAge, SetEnteredUserAge] = useState('');
    const [Error, SetError] = useState();
    const AddUserHandler = (event) => {
        event.preventDefault();
        if(EnteredUserName.trim().length === 0 || EnteredUserAge.trim().length === 0){
            SetError({
                title: "Invalid Input",
                message: "Please enter valid name"
            });
            return;
        }
        if(+EnteredUserAge < 1){
            SetError({
                title: "Invalid age",
                message: "Please enter valid age"
            });
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
    const ErrorHandler = () => {
        SetError(null);
    }
    return(
        <Wrapper>
            {Error && <ErrorModel 
                title = {Error.title}
                message={Error.message}
                onConfirm = {ErrorHandler}
            />}
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
        </Wrapper>
    );
}
export default Adduser;