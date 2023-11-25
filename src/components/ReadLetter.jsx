import React from "react";
import styled from "styled-components";

import CloseLogo from "../assets/icons/close_24px.svg";

function ReadLetter() {
  return (
    <PopUpContainer>
      <CloseButton type="button">
        <BtnImg src={CloseLogo} alt="closebtn" />
      </CloseButton>
      <Text>To.</Text>
      <WritingBox placeholder="내용을 입력해주세요" />
      <Text className="sender">From.</Text>
    </PopUpContainer>
  );
}

export default ReadLetter;

const PopUpContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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

const Text = styled.span`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.headline2};

  &.sender {
    display: flex;
    justify-content: flex-end;
  }
`;

const BtnImg = styled.img`
  object-fit: contain;
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
  flex: 1;
`;
