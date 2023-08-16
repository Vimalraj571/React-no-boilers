import ChildThree from "./ChildThree";

const ChildTwo = (props) => {
  return (
    <>
      <p>{props.ch2}</p>
      <ChildThree {...props} />
    </>
  );
};

export default ChildTwo;
