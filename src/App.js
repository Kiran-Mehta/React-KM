import React, { useState } from "react";
import "./styles.css";
import Child from "./Child";
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
import {
  Router,
  Routes,
  Route,
  useNavigate,
  MemoryRouter,
  BrowserRouter,
} from "react-router-dom";
import UseAuthentication from "./UseAuthentication";
import UseMemo from "./UseMemo";
import AccessingElement from "./AccessingElement";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  // const navigate = useNavigate();

  const handleCallback = (childname) => {
    setName({ childname });
    alert("");
  };

  const handleCount = () => {
    setCount(count + 1);
  };

  // const handleClick = () => {
  //   navigate(-1);
  // }
  return (
    <div className="App">
      <h1>This is Parent Component</h1>
      {/* <ul>
        <li>
          <Child firstNameColor="green" lastNameColor="yellow" />
        </li>
      </ul> */}
      {/* <ChildData parentCallback={handleCallback} /> */}
      {/* {JSON.stringify(name)} */}

      {/* <ChildComponent count={count} onClick={handleCount} /> */}

      {/* <DisplayTime />

      <Counter /> */}
      {/* <CounterReduce/> */}
      {/* <ReactForm/> */}

      {/* <UserList/> */}

      {/* <CountEffect/> */}
      {/* 
      <TodoWithCount/> */}

      {/* <TodoCallBack/> */}

      {/* <UseMemo/> */}

      {/* <AccessingElement/> */}
      {/* <ReferenceCount/> */}

      {/* <ReferenceInput/> */}
      {/* <Router> */}

      {/* <Routes>
          <Route path="/ChildData/:id"  exact  element={<ChildData />} ></Route>
          <Route path="/ChildComponent" exact element={<ChildComponent count={count} onClick={handleCount} />}></Route>
          <Route path="/display-time" exact element={<DisplayTime />}></Route>
          <Route path="/counter" exact element={<Counter />}></Route>
          <Route path="/counter-reduce" exact element={<CounterReduce />}></Route>
          <Route path="/form" exact element={<ReactForm />}></Route>
          <Route path="/user-list" exact element={<UserList />}></Route>
          <Route path="/use-effect-count" exact element={<CountEffect />}></Route>
          <Route path="/todo-count" exact element={<TodoWithCount />}></Route>
          <Route path="/todo-callback" exact element={<TodoCallBack />}></Route>
          <Route path="/ref-count" exact element={<ReferenceCount />}></Route>
          <Route path="/ref-inpt" exact element={<ReferenceInput />}>
            
          </Route>
          
        </Routes> */}

      <UseAuthentication />

      {/* <button onClick={handleClick}>Back to Home</button> */}
      {/* </Router> */}
    </div>
  );
}

// 2 march: redability of code, finding the why part in useCallBack and useMemo, few route related examples, nested route.
