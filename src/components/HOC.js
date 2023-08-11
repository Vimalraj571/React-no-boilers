const HOC = (Component) => (props) => {
  return (
    <div style={{ color: "red" }}>
      <Component {...props} />
    </div>
  );
};

export default HOC;
