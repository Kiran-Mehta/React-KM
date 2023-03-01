
const LoginForm = () =>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () =>{
        email.preventdefault();

    }

    return(
        <form onSubmit = {handleSubmit}>
            <input type="email" name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <input type="password" name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <button type="submit">Sign In</button>

        </form>
    )

}