import React, { useState } from "react";
import Button from "../UI/Button";
import ErrorModal from "../Modal/ErrorModal";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";

const AddUser = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);

    const nameHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const ageHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const submitForm = (event) => {
        const newUserData = {
            id: enteredName + "_" + Math.random(),
            name: enteredName,
            age: parseInt(enteredAge, 10),
        };

        props.onAddUser(newUserData);
        setEnteredName("");
        setEnteredAge("");
    };

    const clearFormHandler = () => {
        setEnteredName("");
        setEnteredAge("");
        setErrorMessage(false);
    };

    const validateInputHandler = (event) => {
        event.preventDefault();
        if (enteredName === "" || enteredAge === "") {
            setErrorMessage("Please enter a valid name and age (non-empty values).");
        } else if (isNaN(enteredAge) || parseInt(enteredAge, 10) < 0) {
            setErrorMessage("Please enter a valid age (> 0).");
        } else {
            submitForm();
        }
    };

    return (
        <Card>
            <form onSubmit={validateInputHandler}>
                <div className={styles.input}>
                    <label>Username</label>
                    <input type="text" name="username" value={enteredName} onChange={nameHandler} />
                </div>
                <div className={styles.input}>
                    <label>Age (Years)</label>
                    <input type="number" name="age" value={enteredAge} onChange={ageHandler} />
                </div>
                <Button type="submit" label="Add User" />
            </form>
            {errorMessage && <ErrorModal message={errorMessage} onClearForm={clearFormHandler} />}
        </Card>
        
    )
};

export default AddUser;