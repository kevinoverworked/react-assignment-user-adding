import React from "react";
import Button from "../UI/Button";

const ErrorModal = (props) => {
    const buttonHandler = () => {
        props.onClearForm(true);
    };

    return (
        <div>
            <div className="title">Invalid Input</div>
            <div className="content">
                <div className="message">
                    {props.message}
                </div>
                <Button type="button" label="Okay" onClick={buttonHandler} />
            </div>
        </div>
    );
};

export default ErrorModal;
