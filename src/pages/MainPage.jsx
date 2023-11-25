import { useState } from "react";
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

  return (
    <Wrapper>
      <Title>김해피님의 케이크</Title>
      <Cake src={cake} />
      <PinkButton onClick={showSendLetter}>편지 초 만들기</PinkButton>
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
