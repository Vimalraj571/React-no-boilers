import { useRef } from "react";

const Uncontrolled = () => {
  const inputRef = useRef(null);
  const handleSubmit = () => {
    alert(`This is the input ${inputRef.current.value}`);
    // console.log(inputRef.current.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Uncontrolled;
