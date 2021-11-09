import React from "react";
import UsersList from "./UsersList";
import styles from "../UI/Card.module.css";

const Users = (props) => {
    
    return (
        <div className={styles.card}>
            <UsersList data={props.data} />
        </div>
    )
    
};

export default Users;