import React from "react";
import UsersItem from "./UsersItem";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.data.map((user) => (
                    <UsersItem key={user.id} name={user.name} age={user.age} />
                ))}
            </ul>
        </Card>
    )
};

export default UsersList;