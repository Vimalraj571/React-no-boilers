import { useState } from "react";

import Test from "./components/part_1/Test";

import ChildOne from "./components/part_2/ChildOne";
import ExampleHeader from "./components/part_2/ExampleHeader";
import ObjectRender from "./components/part_2/ObjectRender";

import HOC from "./components/part_3/HOC";
import Wrapper from "./components/part_3/Wrapper";

import ArrObj from "./components/part_4/ArrObj";
import ArrReact from "./components/part_4/ArrReact";
import SimpleState from "./components/part_4/SimpleState";

import FormSubmit from "./components/part_5/FormSubmit";
import Uncontrolled from "./components/part_5/Uncontrolled";
import Controlled from "./components/part_5/Controlled";
import SimpleTodoRoot from "./components/part_5/SimpleTodo";

import SimpleHook from "./components/part_6/SimpleHook";
import SimpleFetch from "./components/part_6/SimpleFetch";
import StyledComponent from "./components/part_6/StyledComponent";
import StyledComponent2 from "./components/part_6/StyledComponent2";
import Notification from "./components/part_6/Notification";
import SimpleTodoRootSix from "./components/part_6/SimpleTodo";


function App() {
  const a = 10;
  const objectIssue = {
    name: "test name",
    age: 11,
  };

  const [message, setMessage] = useState("");

  return (
    <div>
      {/* <Test /> */}
      {/* <ExampleHeader countExample={a} /> */}
      {/* Above line Passing the props from App(parent component) to ExampleHeader(child component) */}
      {/* <ChildOne ch1={"ch1"} ch2={"ch2"} ch3={"ch3"} /> */}
      {/* Here We are passing the the props from App(parent component) to <ChildOne>(child One) .  
          <ChildOne>(child one) to <ChildTwo>
          <ChildTwo>(child two) to <ChildThree>
          We are using {...props} to directly get the data in the props from all the component
      */}
      {/* <ObjectRender obj={objectIssue} /> */}
      {/* <Wrapper /> */}
      {/* <SimpleState /> */}
      {/* <ArrReact /> */}
      {/* <ArrObj /> */}
      {/* <FormSubmit /> */}
      {/* <Uncontrolled /> */}
      {/* <Controlled /> */}
      {/* <SimpleTodoRoot /> */}
      {/* <SimpleHook /> */}
      {/* <SimpleFetch />  */}
      {/* <StyledComponent /> */}
      {/* <StyledComponent2 /> */}
      {/* <Notification message={"Test"} /> */}
      <SimpleTodoRootSix message={message} setMessage={setMessage}/>
    </div>
  );
}

export default App;
