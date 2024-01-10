import React, { useState, Fragment , useRef } from 'react';
import Card from '../UserInterface/Card';
import Button from '../UserInterface/Button';
import ErrorModel from '../UserInterface/ErrorModel';
const Adduser = (props) => {
    const NameInputRef = useRef();
    const AgeInputRef = useRef();
    const [Error, SetError] = useState();
    const AddUserHandler = (event) => {
        event.preventDefault();
        console.log(NameInputRef.current.value, AgeInputRef.current.value);
        const EnteredName = NameInputRef.current.value;
        const EnteredAge =  AgeInputRef.current.value;
        if(EnteredName.trim().length === 0 || EnteredAge.trim().length === 0){
            SetError({
                title: "Invalid Input",
                message: "Please enter valid name"
            });
            return;
        }
        if(+EnteredAge < 1){
            SetError({
                title: "Invalid age",
                message: "Please enter valid age"
            });
            return;
        }
        // console.log(EnteredUserName, EnteredUserAge);
        props.OnAddUser(EnteredName, EnteredAge);
        NameInputRef.current.value = '';
        AgeInputRef.current.value = '';
    }
    const ErrorHandler = () => {
        SetError(null);
    }
    return(
        <Fragment>
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
                    ref = {NameInputRef}
                />
                <label htmlFor='userage'>User Age:</label>
                <input 
                    type = "number"
                    id = "UserAge"
                    ref = {AgeInputRef}
                />
                <Button type="submit">Submit</Button>
            </form>
            </Card>
        </Fragment>
    );
}
export default Adduser;