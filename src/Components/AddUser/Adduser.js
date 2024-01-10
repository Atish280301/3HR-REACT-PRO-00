import React from 'react';
import Card from '../UserInterface/Card';
const Adduser = () => {
    const AddUserHandler = (event) => {
        event.preventDefault();
    }
    return(
        <Card>
            <form onSubmit={AddUserHandler}>
                <label htmlFor='username'>User Name:</label>
                <input 
                    type = "text"
                    id = "UserName"
                />
                <label htmlFor='userage'>User Age:</label>
                <input 
                    type = "number"
                    id = "UserAge"
                />
                <button type="submit">Submit</button>
            </form>
        </Card>
    );
}
export default Adduser;