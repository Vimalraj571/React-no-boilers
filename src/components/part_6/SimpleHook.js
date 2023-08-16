import { useEffect, useState } from "react";

const SimpleHook = () => {
  console.log("SimpleHook");
  const [test, setTest] = useState("Test UseEffect");

  useEffect(() => {
    console.log("UseEffect");
    setTest("UseEffect");
  }, []);

  return (
    <div>
      {test}
      <button onClick={() => setTest(Math.random())}>
        Click Here Random Math
      </button>
      <button onClick={() => setTest("Click Here")}>Click Here String</button>
    </div>
  );
};

export default SimpleHook;
