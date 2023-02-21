import { useState, useEffect } from "react";
import axios from 'axios';
export default function User({ name, email, phone, address, href, id,}) {

  const [userid, setUserId] = useState([]);
  const [error, setError] = useState('');
  const [loading,setLoading] = useState(false);

  // const onClick=(e)=>{
  //    e.preventDefault();
  //   userListHandle(e.target.value);

  // }

  const handleClick = async () => {
   
    try {
      const userData = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      setUserId(userData.data);
      //setLoading(false);
    }
    catch (error) {
      setError(error.message);
      setLoading(true);
      
    }

  }

  console.log({...userid});

 


  useEffect(() => {
   setUserId(null);

  }, []);

  // if(loading){
  //   return <p>Loading...</p>
  // }

  if (error) {
    console.log(error);
    return <p>Loading...</p>
  }

  return (
  <div>
   <div>
      <p>
        <a href={'#'} onClick={handleClick}  >Name:</a> {name}
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
    { userid &&
   (<div>
      <p>
        <strong >Name:</strong> {userid.name}
      </p>
      <p>
       {/* <strong>City:</strong> {userid.address.city} */}
      </p>
      <p>
        <strong>Phone:</strong> {userid.phone}
      </p>
      <p>
        <strong>Email:</strong> {userid.email}
      </p>
      <hr />
    </div>)
  }
  </div>
 
  );
}


