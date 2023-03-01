import { useState} from "react";
import Todos from "./Todos";

const TodoWithCount = ()=>{

    const[count,setCount] = useState(0);
    const[todos,setTodos] = useState([]);


    const handleClick =()=> {
       setCount(count+1);
    }

    const handleTodoList =()=> {
       setTodos((prev) => [ ...prev, 'New Todo task']);
    }

    return(
        <div>
            <Todos addTodos = {handleTodoList} todos={todos}/>
            <p>Count: {count}</p>
           <button type="button" onClick={handleClick}>Increment</button>
        </div>
    )
}

export default TodoWithCount