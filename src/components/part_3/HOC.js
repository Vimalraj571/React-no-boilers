const HOC = (Component) => (props) => {
  return (
    <div style={{ color: "green" }}>
      <Component {...props} />
    </div>
  );
};

export default HOC;
