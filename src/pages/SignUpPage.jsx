import styled from "styled-components";

function SignUpPage() {
  return (
    <SignUpBox>
      <ProgressBar value="50" min="0" max="100" />
      <Header>케이크의 주인은 누구인가요? </Header>
      <InputBox>
        <Input placeholder="이름을 입력해주세요." />
      </InputBox>
      <Button>다음</Button>
    </SignUpBox>
  );
}
const SignUpBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3.2rem;
  background-color: ${({ theme }) => theme.colors.black};
`;
const ProgressBar = styled.progress`
  margin: 6rem 0 8.4rem 0;
`;
const Header = styled.div`
  margin-bottom: 3.2rem;
  color: white;
  font-size: 2rem;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Input = styled.input`
  padding: 1.4rem 1.7rem;
  margin-bottom: 26.6rem;
  border-radius: 1.2rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.gray09};
`;
const Button = styled.button`
  padding: 1.7rem 9.5rem;
  border-radius: 2.9rem;
  width: 100%;
`;
export default SignUpPage;
