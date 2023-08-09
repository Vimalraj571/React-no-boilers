import ChildOne from "./components/ChildOne";
import ExampleHeader from "./components/ExampleHeader";

function App() {
  const a = 10;
  return (
    <div>
      <ExampleHeader countExample={a} />
      {/* Above line Passing the props from App(parent component) to ExampleHeader(child component) */}
      <ChildOne ch1={"ch1"} ch2={"ch2"} ch3={"ch3"} />
      {/* Here We are passing the the props from App(parent component) to <ChildOne>(child One) .  
          <ChildOne>(child one) to <ChildTwo>
          <ChildTwo>(child two) to <ChildThree>
          We are using {...props} to directly get the data in the props from all the component
      */}
    </div>
  );
}

export default App;
