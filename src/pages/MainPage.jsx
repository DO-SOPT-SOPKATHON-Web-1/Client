import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import cake from "../assets/imgs/cake.png";
import cblue from "../assets/imgs/candleblue.png";
import cpink from "../assets/imgs/candlepink.png";
import cpurple from "../assets/imgs/candlepurple.png";
import LetterPopup from "../components/LetterPopup";
import PinkButton from "../styles/CommonStyle";

function MainPage() {
  const [isShow, setIsShow] = useState(false);
  const showSendLetter = () => {
    setIsShow((prev) => !prev);
  };
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
  }, [location, isShow]);
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
      <PinkButton onClick={showSendLetter}>편지 초 만들기</PinkButton>
      {renderCandles()}
      {isShow && <LetterPopup setIsShow={setIsShow} />}
    </Wrapper>
  );
}

export default MainPage;

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
