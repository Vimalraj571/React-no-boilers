import { useState } from "react";

function Test() {
  const [count, setCount] = useState(0);
  const [testString, setTestString] = useState("This is test Dude");
  return (
    <div>
      <p>Test</p>
      <p><button onClick={() => setCount(100)}>Click For 100</button></p>
      <p>{count}</p>
      <p>{testString}</p>
    </div>
  );
}

export default Test;
