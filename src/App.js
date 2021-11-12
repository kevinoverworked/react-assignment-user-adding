import React, { useState } from "react";
import Users from "./components/Users/Users";
import AddUser from "./components/Users/AddUser";

function App() {
    const [users, setUsers] = useState([]);

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
