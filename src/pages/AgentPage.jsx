import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import cake from "../assets/imgs/cake.png";
import cblue from "../assets/imgs/candleblue.png";
import cpink from "../assets/imgs/candlepink.png";
import cpurple from "../assets/imgs/candlepurple.png";
import PinkButton from "../styles/CommonStyle";

function AgentPage() {
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const path = location.pathname;
      const idFromURL = path.substring(path.lastIndexOf("/") + 1);
      try {
        const response = await axios.post(
          "https://www.sopkathon-web-1.p-e.kr/api/letters/all",
          {
            userId: idFromURL,
          },
        );
        console.log("Response:", response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [location]);
  const handleSprinkle = async () => {
    try {
      const response = await axios.post(
        "https://www.sopkathon-web-1.p-e.kr/api/letters/sprinkle",
        {
          userId: 1,
        },
      );

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  return (
    <Wrapper>
      <Title>김해피님의 케이크</Title>
      <Cake src={cake} />
      <PinkButton onClick={handleSprinkle}>불 붙이기</PinkButton>
      <Info>불을 붙여 김해피님의 편지를 보내주세요</Info>
      <Candle src={cpink} style={{ top: "15rem", left: "15rem" }} />
      <Candle src={cblue} style={{ top: "30rem", left: "16rem" }} />
      <Candle src={cpurple} style={{ top: "22rem", left: "27rem" }} />
      <Candle src={cpink} style={{ top: "18rem", left: "10rem" }} />
      <Candle src={cblue} style={{ top: "30rem", left: "12rem" }} />
      <Candle src={cpurple} style={{ top: "27rem", left: "26rem" }} />
      <Candle src={cpink} style={{ top: "25rem", left: "8rem" }} />
      <Candle src={cblue} style={{ top: "16rem", left: "25rem" }} />
      <Candle src={cpurple} style={{ top: "18rem", left: "22rem" }} />
      <Candle src={cpink} style={{ top: "29rem", left: "22rem" }} />
    </Wrapper>
  );
}

export default AgentPage;

const Candle = styled.img`
  position: absolute;
  width: 2.2764rem;
  height: 7.7507rem;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #181818;
  & ${Candle}:nth-child(1) {
    top: 13rem;
    left: 15rem;
  }
  & ${Candle}:nth-child(2) {
    top: 10rem;
    left: 18rem;
  }
`;

const Title = styled.p`
  margin-top: 6.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.headline1};
`;

const Cake = styled.img`
  width: 28.7rem;
  height: 29.7453rem;
  margin-top: 9.2rem;
  margin-bottom: 4.6rem;
`;

const Info = styled.p`
  color: var(--gray-6, #9e9e9e);
  margin-top: 0.8rem;
  text-align: center;
  /* body/16 medium */
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 144%; /* 2.304rem */
`;
