import useState from "react";

const ConditionalRender = () => {
  const [condition, setCondition] = useState("loading");
  return <>{condition === "loading" ? <p>loading....!</p> : "Done"}</>;
};

export default ConditionalRender;
