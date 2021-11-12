import React from "react";
import UsersList from "./UsersList";

const Users = (props) => {
    return <UsersList data={props.data} /> 
};

export default Users;