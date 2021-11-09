import React, { useState } from "react";
import UsersList from "./UsersList";
import AddUser from "../AddUser/AddUser";

const userData = [
    {
        id: "Max_01",
        name: "Max",
        age: 31
    }
];
const Users = () => {
    const [users, setUsers] = useState(userData);

    const setAddUser = (user) => {
        setUsers(prevUsers => {
            return [user, ...prevUsers];
        });
    };

    return (
        <div>
            <AddUser onAddUser={setAddUser} />
            <UsersList data={users} />
        </div>
    )
};

export default Users;