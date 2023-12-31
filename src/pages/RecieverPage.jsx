import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

function ReadLetter() {
  const location = useLocation();

  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [info, setInfo] = useState("");
  useEffect(() => {
    const readData = async () => {
      const path = location.pathname;
      const idFromURL = path.substring(path.lastIndexOf("/") + 1);

      try {
        const response = await axios.get(
          `https://www.sopkathon-web-1.p-e.kr/api/letters/${idFromURL}`,
        );
        console.log(response);
        setTo(response.data.data.toName);
        setInfo(response.data.data.content);
        setFrom(response.data.data.fromName);
      } catch (err) {
        console.log(err);
      }
    };
    readData();
  }, []);
  return (
    <PopUpContainer>
      <Text>
        To.
        {to}
      </Text>
      <WritingBox value={info} />
      <Text className="sender">
        From.
        {from}
      </Text>
    </PopUpContainer>
  );
}

export default ReadLetter;

const PopUpContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 7.7rem 3.2rem 3.9rem;
`;

const Text = styled.div`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.headline2};
  width: 100%;
  display: flex;

  &.sender {
    justify-content: flex-end;
  }
`;

const WritingBox = styled.textarea`
  width: 100%;
  height: 25.4rem;
  color: ${({ theme }) => theme.colors.gray09};
  background-color: ${({ theme }) => theme.colors.subRed};
  ${({ theme }) => theme.fonts.body2};
  border-radius: 1.2rem;
  border: none;
  padding: 3.2rem 2.3rem;
  flex: 1;
`;
