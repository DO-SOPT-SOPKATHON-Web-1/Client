import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/icons/logo.svg";
import LongLogo from "../assets/icons/Longlogo.svg";
import twinkle1 from "../assets/imgs/twinkle1.png";
import twinkle2 from "../assets/imgs/twinkle2.png";
import PinkButton from "../styles/CommonStyle";

function OnBoardingPage() {
  const navigate = useNavigate();
  const [Section3Visivle, setSection3Visivle] = useState(false);
  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }, 2000);

    return () => clearTimeout(scrollTimeout);
  }, []);

  useEffect(() => {
    const fadeInTimeout = setTimeout(() => {
      setSection3Visivle(true);
    }, 3500);

    return () => clearTimeout(fadeInTimeout);
  }, []);

  return (
    <>
      <PageWrapper />
      <Wrapper>
        <Twinkle1 src={twinkle1} />
        <Twinkle2 src={twinkle2} />
        <Logo src={LongLogo} alt="HAPPY DEATH DAY" />
        <Intro>
          당신이 사랑한 이들이 죽음에 슬퍼하는 대신
          <br />
          당신을 행복하게 추억 할 수 있도록
          <br />
          그들에게 미리 보내두는 편지입니다.
        </Intro>
      </Wrapper>
      <GreyWrapper>
        <Sec3 $isVisible={Section3Visivle}>
          <Logo2 src={logo} alt="HDD" />
          <ButtonWrapper
            onClick={() => {
              navigate("/signup");
            }}
          >
            <PinkButton>시작하기</PinkButton>
          </ButtonWrapper>
        </Sec3>
      </GreyWrapper>
    </>
  );
}

export default OnBoardingPage;

const PageWrapper = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar {
    height: 0;
  }
`;
const Twinkle1 = styled.img`
  position: absolute;
  top: 5.7rem;
  right: 4.56rem;
`;

const Twinkle2 = styled.img`
  position: absolute;
  bottom: 4rem;
  left: 3rem;
`;
const Wrapper = styled.div`
  position: relative;
  transition: opacity 1s ease-in-out;
  width: 100%;
  height: 100vh;
  background: linear-gradient(175deg, #070707 78.1%, #ff84ad 114.18%);
`;

const Sec3 = styled(Wrapper)`
  transition: opacity 1s ease-in-out;
  opacity: 0;
  opacity: ${({ $isVisible }) => ($isVisible === true ? 1 : 0)};
`;

const Logo = styled.img`
  padding-top: 17.7rem;
  display: block;
  margin: 0 auto;
  width: 200px;
`;
const Logo2 = styled(Logo)`
  width: 240px;
`;

const Intro = styled.p`
  color: #fff;
  padding-top: 8.49rem;
  text-align: center;
  ${({ theme }) => theme.fonts.body1};
  line-height: 200%;
`;

const ButtonWrapper = styled.div`
  padding-top: 20rem;
`;
const GreyWrapper = styled.div`
  opacity: 1;
  transition: opacity 2s ease-in-out;
  background: #181818;
  width: 100%;
  height: 100vh;
`;
