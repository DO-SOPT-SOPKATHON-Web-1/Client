import { styled } from "styled-components";

const PinkButton = styled.button`
  width: 80%;
  display: block;
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 0 auto;

  color: ${({ theme }) => theme.colors.white};
  padding: 1.7rem 9.5rem;
  border-radius: 2.9rem;
  border: none;
  color: var(--White, #fffdfd);
  text-align: center;
  font-family: Pretendard Variable;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;

export default PinkButton;
