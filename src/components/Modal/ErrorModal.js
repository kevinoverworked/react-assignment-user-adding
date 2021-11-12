import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "../UI/Button";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClick} />
}   

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.header}><h2>{props.title}</h2></div>
            <div className={classes.content}>
                <p>
                    {props.message}
                </p>
            </div>
            <div className={classes.actions}>
                <Button type="button" className={classes.actions} onClick={props.onClick}>{props.buttonName}</Button>
            </div>
        </div>
    );
};

const ErrorModal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClearForm}/>, document.getElementById("backdrop-root"))}   
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} buttonName={props.buttonName} onClick={props.onClearForm}/>, document.getElementById("modal-root"))}                     
        </Fragment>
    );
};

export default ErrorModal;
