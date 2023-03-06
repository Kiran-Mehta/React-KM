import { useState } from "react";
import { Login } from "./Login";
import { useNavigate } from "react-router-dom";


const SignIn = ({ onLogin }) => {
  // const [email, setEmail] = useState(( ) =>{
  //   const emailData = localStorage.getItem(email);
  //   const initialValue = JSON.parse(emailData);
  //   return initialValue || "";
  // });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setloggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventdefault();
    if(email === 'user@example.com' && password === 'password'){
      setloggedIn(true);
      localStorage.setItem( 'user', JSON.stringify({email}));
    }
     
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
