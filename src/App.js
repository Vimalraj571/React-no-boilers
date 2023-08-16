import ArrObj from "./components/part_4/ArrObj";
import ArrReact from "./components/part_4/ArrReact";
import ChildOne from "./components/part_2/ChildOne";
import Controlled from "./components/part_5/Controlled";
import ExampleHeader from "./components/part_2/ExampleHeader";
import FormSubmit from "./components/part_5/FormSubmit";
import HOC from "./components/part_3/HOC";
import ObjectRender from "./components/part_2/ObjectRender";
import SimpleState from "./components/part_4/SimpleState";
import Uncontrolled from "./components/part_5/Uncontrolled";
import Wrapper from "./components/part_3/Wrapper";
import Test from "./components/part_1/Test";

function App() {
  const a = 10;
  const objectIssue = {
    name: "test name",
    age: 11,
  };
  return (
    <div>
      {/* <Test /> */}
      {/* {/* <ExampleHeader countExample={a} /> */} 
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
      <Controlled />
    </div>
  );
}

export default App;
