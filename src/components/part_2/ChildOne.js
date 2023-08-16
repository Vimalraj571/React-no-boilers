import ChildTwo from "./ChildTwo";

const ChildOne = (props) => {
  return (
    <>
      <p>{props.ch1}</p>
      <ChildTwo {...props} />
    </>
  );
};

export default ChildOne;
