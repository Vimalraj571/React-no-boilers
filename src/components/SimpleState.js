import { useState } from "react";

const SimpleState = () => {
  const [count, setCount] = useState(1);

  //   This is Bad way of Doing
  //   setTimeout(() => {
  //     setCount(count + 1);
  //   }, 1000);

  return (
    <>
      <p>The Count Value : {count}</p>
      <button onClick={() => setCount(count + 1)}>Click to Increase !!!</button>
    </>
  );
};

export default SimpleState;
