import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function SignUpPage() {
  const [step, setStep] = useState("1");
  const [username, setUsername] = useState("");
  const [agentname, setAgentname] = useState("");
  const [agentEmail, setagentEmail] = useState("");
  const [userId, setUserId] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleAgentname = (e) => {
    setAgentname(e.target.value);
  };
  const handleAgentEmail = (e) => {
    setagentEmail(e.target.value);
  };
  const navigate = useNavigate();
  const buttonClick2 = async () => {
    try {
      const patchUserResponse = await axios.patch(
        "https://www.sopkathon-web-1.p-e.kr/api/users",
        {
          userId,
          friendName: agentname,
          friendEmail: agentEmail,
        },
      );
      console.log(patchUserResponse);
      navigate(`/main/${userId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handle = async () => {
    try {
      const response = await axios.post(
        `https://www.sopkathon-web-1.p-e.kr/api/users/identity`,
        {
          name: username,
        },
      );
      console.log(response);
      navigate(`/main/${userId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const buttonClick = async () => {
    try {
      const createUserResponse = await axios.post(
        ` https://www.sopkathon-web-1.p-e.kr/api/users`,
        {
          name: username,
        },
      );
      setUserId(createUserResponse.data.data.userId);
      setStep(2);
    } catch (error) {
      if (error.response.status === 409) {
        handle();
      }
    }
  };
  const setAgent = () => {
    buttonClick();
  };
  return (
    <>
      {}
      {step === "1" ? (
        <SignUpBox>
          <ProgressBar>
            <Progress $step={1} />
          </ProgressBar>
          <Info>
            <Header>케이크의 주인은 누구인가요? </Header>
            <InputBox>
              <Input
                placeholder="이름을 입력해주세요."
                onChange={handleUsername}
              />
            </InputBox>
          </Info>

          <Button onClick={setAgent}>다음</Button>
        </SignUpBox>
      ) : (
        <SignUpBox>
          <ProgressBar>
            <Progress $step={2} />
          </ProgressBar>
          <Info>
            <Header>
              나의 편지 케이크가 완성 됐을 때
              <br />
              불을 붙여 편지를 대신 보내줄
              <br />
              성냥을 정해주세요
            </Header>
            <InputBox2>
              <Input
                placeholder="이름을 입력해주세요."
                onChange={handleAgentname}
              />
              <Input
                placeholder="이메일을 입력해주세요."
                onChange={handleAgentEmail}
              />
              <Explain>
                *성냥: 내가 죽은 후, 편지를 대신 보내주는 대리인
              </Explain>
            </InputBox2>
          </Info>
          <Button onClick={buttonClick2}>다음</Button>
        </SignUpBox>
      )}
    </>
  );
}

const SignUpBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  padding: 3.2rem;
  background-color: ${({ theme }) => theme.colors.black};
`;
const ProgressBar = styled.div`
  border-radius: 0.4rem;
  margin-top: 6rem;
  margin-bottom: 6rem;
  width: 12rem;
  height: 0.8rem;
  box-shadow: 0 0 0 0.1rem inset ${({ theme }) => theme.colors.white};
  position: relative;
`;
const Progress = styled.div`
  position: absolute;
  border-radius: 0.4rem;
  height: 0.8rem;
  background-color: ${({ theme }) => theme.colors.primary};
  left: 0;
  top: 0;
  width: ${({ $step }) => ($step === 1 ? "6rem" : "12rem")};
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Header = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.headline2};
  font-family: Pretendard Variable;
  font-size: 2rem;
  font-weight: 600;
  line-height: 144%;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 26.6rem;
  width: 100%;
`;
const Input = styled.input`
  padding: 1.4rem 1.7rem;
  border-radius: 1.2rem;
  ${({ theme }) => theme.fonts.body2};
  border: none;
  background-color: ${({ theme }) => theme.colors.gray09};
  color: ${({ theme }) => theme.colors.gray02};
`;
const InputBox2 = styled(InputBox)`
  margin-bottom: 16.2rem;
  gap: 2rem;
`;
const Explain = styled.p`
  color: ${({ theme }) => theme.colors.gray06};
  align-self: center;
  font-size: 1.2rem;
`;
const Button = styled.button`
  position: absolute;
  padding: 1.7rem 9.5rem;
  border-radius: 2.9rem;
  bottom: 8.4rem;
  margin: 0 3.2rem;
  width: 31.1rem;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-family: Pretendard Variable;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;

export default SignUpPage;
