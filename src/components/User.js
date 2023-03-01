import { useState, useEffect } from "react";
import axios from 'axios';
export default function User({ name, email, phone, address, id, parentCallBack}) {

  const [userData, setUserData] = useState({});
  const [error, setError] = useState('');
  const [loading,setLoading] = useState(false);

  

  const handleClick = async (e) => {
   
    try {
      setLoading(true);
      const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      setUserData(user.data);
      setLoading(false);
      parentCallBack(user.data);
    }
    catch (error) {
      setError(error.message);
      setLoading(false);
      
    }
   
  }

  console.log({...userData});
  
  useEffect(() => {
   setUserData(null);

  }, []);

  if(loading){
    return <h1>Loading...</h1>
  }

  if (error) {
    console.log(error);
    return <p>Error: {error}</p>
  }

  return (
  <div>
   <div>
      <p>
        <a href={'#'} onClick={(e)=>handleClick(e)} name="name">Name:</a> {name}
      </p>
      <p>
        <strong>City:</strong> {address.city}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <hr />
    </div>
    { userData &&
   (<div>
      <p>
        <strong >Name:</strong> {userData.name}
      </p>
      <p>
       {/* <strong>City:</strong> {userid.address.city} */}
      </p>
      <p>
        <strong>Phone:</strong> {userData.phone}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
      <hr />
    </div>)
  }
  </div>
 
  );
}


