import { useEffect, useState } from "react";

import styled from "styled-components";

const CustomDiv = styled.div`
  display: block;
  background: #ffffc5;
`;

const Notification = ({ message, setMessage }) => {
  useEffect(() => {
    setMessage(message);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 2000);
  }, [message, setMessage]);

  return (
    <>
      <CustomDiv>{message}</CustomDiv>
    </>
  );
};

export default Notification;
