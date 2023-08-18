import styled from "styled-components";

const SampleBtn = styled.button`
  color: palevioletred;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const StyledComponent2 = () => {
  return (
    <>
      <Title>This is Title</Title>
      <div style={{ color: "red" }}>Inline Style</div>
      <div>Styled component</div>
      <SampleBtn>Click Here</SampleBtn>
    </>
  );
};

export default StyledComponent2;
