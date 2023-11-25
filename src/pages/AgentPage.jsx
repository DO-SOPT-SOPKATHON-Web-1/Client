import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import cake from "../assets/imgs/cake.png";
import cblue from "../assets/imgs/candleblue.png";
import cpink from "../assets/imgs/candlepink.png";
import cpurple from "../assets/imgs/candlepurple.png";
import Toast from "../components/Toast";
import PinkButton from "../styles/CommonStyle";

function AgentPage() {
  const [toast, setToast] = useState(false);
  const location = useLocation();
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [colors, setColors] = useState([]);

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
        setName(response.data.data.name);
        setCount(response.data.data.letterCount);
        setColors(response.data.data.colors);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [location]);

  const handleSprinkle = async () => {
    const path = location.pathname;
    const idFromURL = path.substring(path.lastIndexOf("/") + 1);
    try {
      const response = await axios.post(
        "https://www.sopkathon-web-1.p-e.kr/api/letters/sprinkle",
        {
          userId: idFromURL,
        },
      );

      console.log("Response:", response.data);
      setToast(true);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  const fixedPositions = [
    { top: "15rem", left: "15rem" },
    { top: "30rem", left: "16rem" },
    { top: "22rem", left: "27rem" },
    { top: "18rem", left: "10rem" },
    { top: "30rem", left: "12rem" },
    { top: "27rem", left: "26rem" },
    { top: "25rem", left: "8rem" },
    { top: "16rem", left: "25rem" },
    { top: "18rem", left: "22rem" },
    { top: "29rem", left: "22rem" },
  ];
  const renderCandles = () => {
    const colorsMap = {
      RED: cpink,
      BLUE: cblue,
      PURPLE: cpurple,
    };

    const getRandomPosition = () => {
      if (fixedPositions.length === 0) {
        // Reset the positions if all have been used
        fixedPositions.push(
          { top: "15rem", left: "15rem" },
          { top: "30rem", left: "16rem" },
          { top: "22rem", left: "27rem" },
          { top: "18rem", left: "10rem" },
          { top: "30rem", left: "12rem" },
          { top: "27rem", left: "26rem" },
          { top: "25rem", left: "8rem" },
          { top: "16rem", left: "25rem" },
          { top: "18rem", left: "22rem" },
          { top: "29rem", left: "22rem" },
        );
      }

      const randomIndex = Math.floor(Math.random() * fixedPositions.length);
      return fixedPositions.splice(randomIndex, 1)[0];
    };
    return Array.from({ length: count }).map((_, index) => {
      const color = colors[index % colors.length];
      const candleStyle = getRandomPosition();

      return <Candle key={index} src={colorsMap[color]} style={candleStyle} />;
    });
  };

  return (
    <Wrapper>
      <Title>
        {name}
        님의 케이크
      </Title>
      <Cake src={cake} />
      <PinkButton onClick={handleSprinkle}>불 붙이기</PinkButton>
      <Info>
        불을 붙여
        {' '}
        {name}
        님의 편지를 보내주세요
      </Info>
      {renderCandles()}
      {toast && (
        <Toast setToast={setToast} message="이메일 전송에 성공했어요!" />
      )}
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
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 144%;
`;
