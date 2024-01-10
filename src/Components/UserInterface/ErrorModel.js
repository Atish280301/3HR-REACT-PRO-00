import React from 'react';
import ReactDom from 'react-dom';
import Card from '../UserInterface/Card';
import Button from './Button';
const Backdrop = props =>{
    return (
        <div className="black" onClick={props.onConfirm} />
    );
}
const ModalOverlay = props =>{
    return(
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
    );
}
const ErrorModel = (props) =>{
    return(
        <React.Fragment>
            {ReactDom.createPortal(<Backdrop onConfirm = {props.onConfirm} />, 
            document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<ModalOverlay 
                title = {props.title}
                message = {props.message}
                onConfirm = {props.onConfirm}
            />, 
            document.getElementById('overlay-root'))}
        </React.Fragment>
    );
}
export default ErrorModel;