import { useState } from "react";

// import Test from "./components/part_1/Test";

// import ChildOne from "./components/part_2/ChildOne";
// import ExampleHeader from "./components/part_2/ExampleHeader";
// import ObjectRender from "./components/part_2/ObjectRender";

// import HOC from "./components/part_3/HOC";
// import Wrapper from "./components/part_3/Wrapper";

// import ArrObj from "./components/part_4/ArrObj";
// import ArrReact from "./components/part_4/ArrReact";
// import SimpleState from "./components/part_4/SimpleState";
// import ConditionalRender from "./components/part_4/ConditionalRender";
// import ConditionalRender2 from "./components/part_4/ConditionalRender2";
// import Cr from "./components/part_4/Cr";

// import FormSubmit from "./components/part_5/FormSubmit";
// import Uncontrolled from "./components/part_5/Uncontrolled";
// import Controlled from "./components/part_5/Controlled";
// import SimpleTodoRoot from "./components/part_5/SimpleTodo";

// import SimpleHook from "./components/part_6/SimpleHook";
// import SimpleFetch from "./components/part_6/SimpleFetch";
// import StyledComponent from "./components/part_6/StyledComponent";
// import StyledComponent2 from "./components/part_6/StyledComponent2";
// import Notification from "./components/part_6/Notification";
// import SimpleTodoRootSix from "./components/part_6/SimpleTodo";
// import InlineStyle from "./components/part_6/InlineStyle";

// import Class from "./components/ClassComp/Class";
// import CounterFn from "./components/ClassComp/Function";
// import Test from "./components/ClassComp/Lc";
// import UseEff from "./components/ClassComp/useEff";

// import SimpleRoute from "./components/part_7/SimpleRoute";
import RedirectExample from "./components/part_7/RedirectNavigateExample"
import SimpleTodoRoot from "./components/part_7/TodoWithRoute";

function App() {
  const a = 10;

  const objectIssue = {
    name: "test name",
    age: 11,
  };

  const [message, setMessage] = useState("Test");

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
      {/* <ArrReact />
      <ArrObj /> */}
      {/* <Cr/> */}
      {/* <ConditionalRender /> */}
      {/* <ConditionalRender2 /> */}
      {/* <FormSubmit /> */}
      {/* <Uncontrolled /> */}
      {/* <Controlled /> */}
      {/* <SimpleTodoRoot /> */}
      {/* <SimpleHook /> */}
      {/* <SimpleFetch />  */}
      {/* <InlineStyle /> */}
      {/* <StyledComponent /> */}
      {/* <StyledComponent2 /> */}
      {/* <Notification message={"Test"} setMessage={setMessage}/> */}
      {/* <SimpleTodoRootSix message={message} setMessage={setMessage}/> */}
      {/* <Class />
      <CounterFn /> */}
      {/* <Test /> */}
      {/* <UseEff /> */}
      {/* <SimpleRoute /> */}
      {/* <RedirectExample /> */}
      <SimpleTodoRoot />
    </div>
  );
}

export default App;
