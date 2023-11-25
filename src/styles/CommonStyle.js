import { styled } from "styled-components";

const PinkButton = styled.button`
  font-family: "Pretendard-Black";
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.mainGreen};
`;
