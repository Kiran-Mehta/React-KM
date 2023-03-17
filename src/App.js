import React, {createContext} from "react";
import "./styles.css";
//import Child from "./Child";
import ChildData from "./ChildData";
import ChildComponent from "./ChildComponent";
import DisplayTime from "./DisplayTime";
import Counter from "./Counter";
import ReactForm from "./components/Form";
import UserList from "./UserList";
import CountEffect from "./CountEffect";
import CounterReduce from "./CounterReduce";
import TodoWithCount from "./callBackHooks/TodoWithCount";
import TodoCallBack from "./callBackHooks/TodoCallBack";
import ReferenceCount from "./ReferenceCount";
import ReferenceInput from "./ReferenceInput";
import { Routes, Route, Link } from "react-router-dom";
import Name from "./Name";

export const UserContext = createContext();

export default function App() {

 

  return (
    <div className="App">
      <h1>This is Parent Component</h1>
      {/* <Router> */}
      {/* <Link to="/ChildComponent">Child Componnet count</Link>
      <Routes>
        <Route path="/ChildData/:id" exact element={<ChildData />}></Route>
        <Route
          path="/ChildComponent"
          exact
          element={<ChildComponent />}
        ></Route>
        <Route path="/display-time" exact element={<DisplayTime />}></Route>
        <Route path="/counter" exact element={<Counter />}></Route>
        <Route path="/counter-reduce" exact element={<CounterReduce />}></Route>
        <Route path="/form" exact element={<ReactForm />}></Route>
        <Route path="/user-list" exact element={<UserList />}></Route>
        <Route path="/use-effect-count" exact element={<CountEffect />}></Route>
        <Route path="/todo-count" exact element={<TodoWithCount />}></Route>
        <Route path="/todo-callback" exact element={<TodoCallBack />}></Route>
        <Route path="/ref-count" exact element={<ReferenceCount />}></Route>
        <Route path="/ref-inpt" exact element={<ReferenceInput />}></Route>
      </Routes> */}

      {/* <button onClick={handleClick}>Back to Home</button> */}
      {/* </Router> */}
     
     {/* <A>

     </A>
     <B>

     </B> */}

      <UserContext.Provider value="Red">
      <Name />
    </UserContext.Provider>
    </div>
  );
}

// 2 march: redability of code, finding the why part in useCallBack and useMemo, few route related examples, nested route.
