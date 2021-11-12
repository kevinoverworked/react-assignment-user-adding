import React from "react";
import UsersList from "./UsersList";
import Card from "../UI/Card";

const Users = (props) => {
    
    return (
        <Card>
            <UsersList data={props.data} />
        </Card>
    )
    
};

export default Users;