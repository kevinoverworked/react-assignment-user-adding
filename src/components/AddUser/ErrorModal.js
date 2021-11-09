import React from "react";
import Button from "../UI/Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
    const buttonHandler = () => {
        props.onClearForm(true);
    };

    return (
        <div>
            <div className={styles.backdrop}></div>
            <div className={styles.modal}>
                <div className={styles.header}><h2>Invalid Input</h2></div>
                <div className={styles.content}>
                    <p>
                        {props.message}
                    </p>
                </div>
                <div className={styles.actions}>
                    <Button type="button" className={styles.actions} label="Okay" onClick={buttonHandler} />
                </div>
            </div>
        </div>
    );
};

export default ErrorModal;
