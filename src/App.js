import ArrObj from "./components/ArrObj";
import ArrReact from "./components/ArrReact";
import ChildOne from "./components/ChildOne";
import ExampleHeader from "./components/ExampleHeader";
import HOC from "./components/HOC";
import ObjectRender from "./components/ObjectRender";
import SimpleState from "./components/SimpleState";
import Wrapper from "./components/Wrapper";

function App() {
  const a = 10;
  const objectIssue = {
    name: "test name",
    age: 11,
  };
  return (
    <div>
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
      <ArrObj />
    </div>
  );
}

export default App;
