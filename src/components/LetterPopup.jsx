import axios from "axios";
import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

import CloseLogo from "../assets/icons/close_24px.svg";
import ChoiceRed from "../assets/icons/Ellipse13.svg";
import ChoicePurple from "../assets/icons/Ellipse14.svg";
import ChoiceBlue from "../assets/icons/Ellipse15.svg";
import PinkButton from "../styles/CommonStyle";

function LetterPopup({ setIsShow }) {
  const [receiverName, setReceiverName] = useState("");
  const [receiverEmail, setReceiverEmail] = useState("");
  const [candleColor, setCandleColor] = useState("");
  const [letterContent, setLetterContent] = useState("");

  const location = useLocation();

  const writeLetter = async () => {
    const path = location.pathname;
    const idFromURL = path.substring(path.lastIndexOf("/") + 1);
    try {
      console.log(receiverName, idFromURL, receiverEmail, candleColor, letterContent);
      const response = await axios.post(
        "https://www.sopkathon-web-1.p-e.kr/api/letters",
        {
          userId: idFromURL,

          name: receiverName,
          toEmail: receiverEmail,
          color: candleColor,
          content: letterContent,
        },
      );

      console.log(response);
      setIsShow(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PopUpContainer>
      <CloseButton
        type="button"
        onClick={() => {
          setIsShow(false);
        }}
      >
        <BtnImg src={CloseLogo} alt="closebtn" />
      </CloseButton>
      <InfoInput
        type="text"
        placeholder="편지 받을 사람의 이름을 입력해 주세요."
        onChange={(e) => setReceiverName(e.target.value)}
      />
      <InfoInput
        type="text"
        placeholder="편지 받을 사람의 이메일을 입력해 주세요."
        onChange={(e) => setReceiverEmail(e.target.value)}
      />
      <ColorPalette>

        <BtnWrapper type="button" onClick={() => setCandleColor("RED")}>
          <BtnImg src={ChoiceRed} alt="choicered" />
        </BtnWrapper>
        <BtnWrapper type="button" onClick={() => setCandleColor("PURPLE")}>
          <BtnImg src={ChoicePurple} alt="choicepurple" />
        </BtnWrapper>
        <BtnWrapper type="button" onClick={() => setCandleColor("BLUE")}>

          <BtnImg src={ChoiceBlue} alt="choiceblue" />
        </BtnWrapper>
      </ColorPalette>
      <WritingBox
        placeholder="내용을 입력해주세요"
        onChange={(e) => setLetterContent(e.target.value)}
      />
      <PinkButton type="button" onClick={writeLetter}>
        초 꽂기
      </PinkButton>
    </PopUpContainer>
  );
}

export default LetterPopup;

const PopUpContainer = styled.section`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 7.7rem 3.2rem 3.9rem;
`;

const CloseButton = styled.button`
  position: fixed;
  top: 2.3rem;
  right: 3.2rem;

  background-color: transparent;
  border: none;
`;

const BtnImg = styled.img`
  object-fit: contain;
`;

const InfoInput = styled.input`
  width: 31.1rem;
  height: 5.2rem;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.gray09};
  color: ${({ theme }) => theme.colors.gray06};
  border: none;
  text-align: center;
  ${({ theme }) => theme.fonts.body2};
`;

const ColorPalette = styled.div`
  margin-top: 1rem;
`;

const BtnWrapper = styled.button`
  background-color: transparent;
  border: none;
`;

const WritingBox = styled.textarea`
  width: 31.1rem;
  height: 25.4rem;
  color: ${({ theme }) => theme.colors.gray09};
  background-color: ${({ theme }) => theme.colors.subRed};
  ${({ theme }) => theme.fonts.body2};
  border-radius: 1.2rem;
  border: none;
  padding: 3.2rem 2.3rem;
  margin-bottom: 2.3rem;
`;
