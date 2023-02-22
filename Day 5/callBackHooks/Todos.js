import { useState, memo} from "react";


const Todos = ({todos, addTodos})=>{

    console.log("Todos child render");
    
   
    return(
        <div>
            <h2> My Todos</h2>
            {
           todos.map((todo,index)=>{
            return <p key={index}>{`${todo} ${index +1}`}</p>
           })
            }
           <button onClick={addTodos} >Add Todos</button>
        </div>
    )
}

export default memo(Todos)