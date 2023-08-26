import ChildThree from "./ChildThree";

const ChildTwo = (props) => {
  const data = "response"
  return (
    <>
      <p>{props.ch2}</p>
      <ChildThree {...props} data={data}/>
    </>
  );
};

export default ChildTwo;
