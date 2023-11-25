import React from "react";
import styled from "styled-components";

import CloseLogo from "../assets/icons/close_24px.svg";
import ChoiceRed from "../assets/icons/Ellipse13.svg";
import ChoicePurple from "../assets/icons/Ellipse14.svg";
import ChoiceBlue from "../assets/icons/Ellipse15.svg";
import PinkButton from "../styles/CommonStyle";

function LetterPopup({ setIsShow }) {
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
      />
      <InfoInput
        type="text"
        placeholder="편지 받을 사람의 이메일을 입력해 주세요."
      />
      <ColorPalette>
        <BtnWrapper type="button">
          <BtnImg src={ChoiceRed} alt="choicered" />
        </BtnWrapper>
        <BtnWrapper type="button">
          <BtnImg src={ChoicePurple} alt="choicepurple" />
        </BtnWrapper>
        <BtnWrapper type="button">
          <BtnImg src={ChoiceBlue} alt="choiceblue" />
        </BtnWrapper>
      </ColorPalette>
      <WritingBox placeholder="내용을 입력해주세요" />
      <PinkButton>초 꽂기</PinkButton>
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
