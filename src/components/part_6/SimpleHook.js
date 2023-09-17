import { useEffect, useState } from "react";

const SimpleHook = () => {
  console.log("SimpleHook");
  const [test, setTest] = useState("Test UseEffect");

  useEffect(() => {
    console.log("UseEffect init");
    setTest("UseEffect");
  }, []);

  useEffect(() => {
    console.log("This is Btn clicked use effect");
    setTest("Btn Clicked");
  }, [test]);

  // useEffect(()=>{}) // not valid
  // useEffect(()=>{console.log('asfd');},[test]) // if the react statevariable
  // useEffect(()=>{console.log('asfd');},[]) //-  only one at init render

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
