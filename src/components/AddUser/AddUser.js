import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    const nameHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const ageHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const newUserData = {
            id: enteredName + "_" + Math.random(),
            name: enteredName,
            age: enteredAge,
        };
        console.log(newUserData);
        props.onAddUser(newUserData);
        setEnteredName("");
        setEnteredAge("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className={styles.input}>
                <label>Username</label>
                <input type="text" name="username" value={enteredName} onChange={nameHandler} />
            </div>
            <div className={styles.input}>
                <label>Age</label>
                <input type="number" name="age" value={enteredAge} onChange={ageHandler} />
            </div>
            <Button label="Add User" />
        </form>
    )
};

export default AddUser;