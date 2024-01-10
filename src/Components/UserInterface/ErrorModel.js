import React from 'react';
import Card from '../UserInterface/Card';
import Button from './Button';
const ErrorModel = (props) =>{
    return(
        <React.Fragment>
        <div className="black" onClick={props.onConfirm} />
        <Card>
            <header>
                <h2>
                    {props.title}
                </h2>
            </header>
            <div>
                <p>
                    {props.message}
                </p>
            </div>
            <footer>
                <Button onClick={props.onConfirm}>OK!</Button>
            </footer>
        </Card>
        </React.Fragment>
    );
}
export default ErrorModel;