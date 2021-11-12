import React from "react";
import classes from "./UsersItem.module.css";

const UsersItem = (props) => {
    return <li className={classes.item}>{props.name} ({props.age} years old)</li>
};

export default UsersItem;
