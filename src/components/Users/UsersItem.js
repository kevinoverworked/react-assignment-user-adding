import React from "react";
import styles from "./UsersItem.module.css";

const UsersItem = (props) => {
    return <div className={styles.item}>{props.name} ({props.age} years old)</div>
};

export default UsersItem;
