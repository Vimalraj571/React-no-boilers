import ChildFour from "./ChildFour";

const ChildThree = (props) => {
  let fourthChild = "This is Fourth Child";
  return (
    <>
      <p>{props.ch3}</p>
      <ChildFour childFour={fourthChild} />
      {
      /* Directly Passing Props from 
      <ChildThree/>(parent Component) to  <ChildFour/>(child component)*/
      }
    </>
  );
};

export default ChildThree;
