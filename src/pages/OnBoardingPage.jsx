import React, { useEffect, useState } from "react";
import styled from "styled-components";

import logo from "../assets/icons/logo.svg";
import LongLogo from "../assets/icons/Longlogo.svg";
import PinkButton from "../styles/CommonStyle";

function OnBoardingPage() {
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
    }, 4000);

    return () => clearTimeout(fadeInTimeout);
  }, []);

  return (
    <>
      <Wrapper>
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
          <Logo src={logo} alt="HDD" />
          <Intro>
            당신이 사랑한 이들이 죽음에 슬퍼하는 대신
            <br />
            당신을 행복하게 추억 할 수 있도록
            <br />
            그들에게 미리 보내두는 편지입니다.
          </Intro>
          <PinkButton>시작하기</PinkButton>
        </Sec3>
      </GreyWrapper>
    </>
  );
}

export default OnBoardingPage;

const Wrapper = styled.div`
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

const Intro = styled.p`
  color: #fff;
  padding-top: 8.49rem;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;
const GreyWrapper = styled.div`
  opacity: 1;
  transition: opacity 2s ease-in-out;
  background: #181818;
  width: 100%;
  height: 100vh;
`;
