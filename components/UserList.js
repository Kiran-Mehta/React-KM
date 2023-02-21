import { useState, useEffect } from "react";
import axios from 'axios';
import User from "./components/User";

export default function UserList() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const userSet = await axios.get("https://jsonplaceholder.typicode.com/users");
           setUsers(userSet.data);
        }

        getUsers();

    },[]);
     
    //console.log(users);
    return (
        <div>
            <h1>Users List</h1>
            <div>
                {users.map((user) => (
                    <User key={user.id} {...user}/>
                ))}
            </div>
        </div>
    );
}
