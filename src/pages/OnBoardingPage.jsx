import styled from "styled-components";

import LongLogo from "../assets/icons/Longlogo.svg";

function OnBoardingPage() {
  return (
    <Wrapper>
      <Logo src={LongLogo} alt="HAPPY DEATH DAY" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(175deg, #070707 78.1%, #ff84ad 114.18%);
`;
const Logo = styled.img`
  display: block;
  margin: 0 auto;
  width: 200px;
`;
export default OnBoardingPage;
