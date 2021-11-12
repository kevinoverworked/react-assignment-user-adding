import React, { useState, useRef, Fragment } from "react";
import Button from "../UI/Button";
import ErrorModal from "../Modal/ErrorModal";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [errorMessage, setErrorMessage] = useState(false);

    const clearFormHandler = () => {
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
        setErrorMessage(false);
    };

    const validateInputHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredName.trim() === "" || enteredAge.trim() === "") {
            setErrorMessage("Please enter a valid name and age (non-empty values).");
        } else if (isNaN(enteredAge) || parseInt(enteredAge, 10) < 0) {
            setErrorMessage("Please enter a valid age (> 0).");
        } else {
            clearFormHandler();
            props.onAddUser(enteredName, enteredAge);
        }
    };

    return (
        <Fragment>
            <Card className={classes.input}>
                <form onSubmit={validateInputHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" ref={nameInputRef} />
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" name="age" ref={ageInputRef} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
            {errorMessage && <ErrorModal message={errorMessage} title="Invalid Input" buttonName="Okay" onClearForm={clearFormHandler} />}
        </Fragment>
        
    )
};

export default AddUser;