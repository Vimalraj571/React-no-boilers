import { useEffect, useState } from "react";

const UseEff = () => {
  const [count, setCount] = useState(0);

//   useEffect(() => {
//     setCount(count + 1);
//   }, [count]);
//   console.log("Rerender count");
//   console.log(count);

  return <>The Count {count}</>;
};

export default UseEff;
