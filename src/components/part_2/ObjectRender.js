const ObjectRender = (props) => {
  const { obj } = props;
  return (
    <>
      {JSON.stringify(obj)}
      {/* <p>{obj.name}</p>
      <p>{obj.age}</p> */}
      {/* 
        Above statements are valid
      */}
      {/* <p>{obj}</p> */}
      {/* 
        Above statement is valid
      */}
    </>
  );
};

export default ObjectRender;
