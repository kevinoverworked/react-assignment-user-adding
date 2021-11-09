import React from "react";
import UsersItem from "./UsersItem";

const UsersList = (props) => {
    return (
        <div>
            {props.data.map((user) => (
                <UsersItem key={user.id} name={user.name} age={user.age} />
            ))}
        </div>
    )
};

export default UsersList;