import ExampleHeader from "./components/ExampleHeader";

function App() {
  const a = 10;
  return (
    <div>
      <ExampleHeader countExample={a} />
      {/* Above line Passing the props from App(parent component) to ExampleHeader(child component) */}
    </div>
  );
}

export default App;
