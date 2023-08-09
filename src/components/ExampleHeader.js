// Props Example
const ExampleHeader = (props) => {
  const { countExample } = props;

  return (
    <>
      <h3>This is example of Props</h3>
      <p>This is Destructuring {countExample}</p>
      <p>This is Direct Access {props.countExample}</p>
    </>
  );
};

export default ExampleHeader;

// <></> React Fragments similar to the Div
// Example of Props
// Destructuring of the props
