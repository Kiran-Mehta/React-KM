import { useState, useEffect } from "react";
import axios from 'axios';
import User from "./components/User";

export default function UserList() {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const url = `https://jsonplaceholder.typicode.com/users`;

    const getUsers = async () => {
        try {
            setLoading(true);
            const userSet = await axios.get(url);
            setUsers(userSet.data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);

        }
    }

    useEffect(() => {
        getUsers();

    }, []);

    if(loading){
        return <h1>Loading...</h1>
      }
    
      if (error) {
        console.log(error);
        return <p>Error: {error}</p>
    }

    // console.log(users);
    return (
        <div>
            <h1>Users List</h1>
            <div>
                {users.map((user) => (
                    <User key={user.id} {...user} id={user.id} />
                ))}
            </div>
        </div>
    );
}
