import { useState } from "react";

const CounterFn = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Inc</button>
      </div>
    </>
  );
};

export default CounterFn;
