import { useReducer } from "react";

import reducer from "../reducers/formReducer.js"


const initialFormState={
    userName:"",
    email:"",
}

 const Form=()=>{

    const [state, dispatch]= useReducer(reducer,initialFormState);

    const handleTextChange = (e) =>{
        dispatch({
            type: "Change input text",
            value: e.target.value,
            field: e.target.name
        })
    }

    const submit=(e)=>{
        console.log({
            name: state.userName,
            email: state.email,
           
        })
        e.preventDefault();
    }

    return(
        <form >
            <label>
                Username: <input type="text" name="userName" value={state.userName} onChange={(e)=>handleTextChange(e)}/>
            </label>
            <label>
                email: <input type="email" name="email" value={state.email} onChange={(e)=>handleTextChange(e)}/>
            </label>

            <button onClick={(e)=> submit(e) } type="submit">Submit</button>
        </form>
    )
}

export default Form

