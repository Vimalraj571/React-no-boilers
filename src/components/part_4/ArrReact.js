import { useState } from "react";

const ArrReact = () => {
  const [alpha, setAlphaArr] = useState([]);
  console.log()
  // let a = [];
  console.log(alpha);
  console.log("re render");
  return (
    <>
      <p>ArrReact</p>
      {/* <button onClick={()=>{a.push('a')}}>Temp</button>
      {a} */}
      <button onClick={() => setAlphaArr(alpha.concat("B"))}>
        Add 'B' Arr
      </button>
      <button onClick={() => setAlphaArr([...alpha, "Z"])}>Add 'Z' Arr</button>
      <button onClick={() => setAlphaArr([...alpha, "Y"])}>Add 'Y' Arr</button>
      <button onClick={() => setAlphaArr(alpha.concat("A"))}>
        Add 'A' Arr
      </button>
      {alpha.map((t, index) => (
        <div key={index}>{t}</div>
      ))}
    </>
  );
};

// a.map(x=><div key={x}>{x}</div>)

export default ArrReact;
