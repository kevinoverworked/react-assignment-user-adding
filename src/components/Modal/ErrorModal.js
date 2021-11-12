import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
    const buttonHandler = () => {
        props.onClearForm(true);
    };

    return (
        <Card>
            <div className={classes.backdrop} onClick={buttonHandler}></div>
            <div className={classes.modal}>
                <div className={classes.header}><h2>{props.title}</h2></div>
                <div className={classes.content}>
                    <p>
                        {props.message}
                    </p>
                </div>
                <div className={classes.actions}>
                    <Button type="button" className={classes.actions} onClick={buttonHandler}>{props.buttonName}</Button>
                </div>
            </div>
        </Card>
    );
};

export default ErrorModal;
