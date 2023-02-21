import { useState, useEffect } from "react";
import axios from 'axios';
import User from "./components/User";

export default function UserList() {

    const [users, setUsers] = useState([]);
    const [error,setError]= useState('');
    const [loading,setLoading] = useState(false);

    const url=`https://jsonplaceholder.typicode.com/users`;

    const getUsers = async () => {
        try{
        const userSet = await axios.get(url);
       setUsers(userSet.data);
    }catch(error){
       setError(error.message);
       setLoading(true);
    }
    }
    
    useEffect(() => {
        getUsers();

    },[]);

    if (error) {
        console.log(error);
        return <h1>Loading...</h1>
      }
   
   // console.log(users);
    return (
        <div>
            <h1>Users List</h1>
            <div>
                {users.map((user) => (
                    <User key={user.id} {...user} href={url} id={user.id}/>
                ))}
            </div>
        </div>
    );
}
