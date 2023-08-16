import useState from "react";

const ConditionalRender2 = () => {
  // If else if else if else in the react component
  const [condition, setCondition] = useState("loading");
  setCondition("done");
  setCondition("err");
  if (condition === "done") {
    return <>Its done</>;
  } else if (condition === "err") {
    return <>Its Err</>;
  } else if (condition === "loading") {
    return <>Done</>;
  }
};

export default ConditionalRender2;
