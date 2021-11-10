import React, { useState } from "react";
import Users from "./components/Users/Users";
import AddUser from "./components/AddUser/AddUser";

const userData = [];

function App() {
    const [users, setUsers] = useState(userData);

    const setAddUser = (user) => {
        setUsers((prevUsers) => {
            return [user, ...prevUsers];
        });
    };

    return (
        <div>
            <AddUser onAddUser={setAddUser} />
            {users.length > 0 && <Users data={users} />}
        </div>
    );
}

export default App;
