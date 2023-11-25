import React from "react";
import styled from "styled-components";

function LetterPopup() {
  return <WritingBox placeholder="내용을 입력해주세요" />;
}

export default LetterPopup;

const WritingBox = styled.input`
  width: 31.1rem;
  height: 25.4rem;
  color: ${({ theme }) => theme.colors.gray09};
  border-radius: 1.2rem;
`;
