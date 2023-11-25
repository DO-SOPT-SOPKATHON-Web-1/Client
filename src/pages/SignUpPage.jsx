import styled from "styled-components";

function SignUpPage() {
  return (
    <SignUpBox>
      <ProgressBar value="50" min="0" max="100" />
      <Header>케이크의 주인은 누구인가요? </Header>
      <InputBox>
        <Input placeholder="이름을 입력해주세요." />
        <Input placeholder="이메일을 입력해주세요." />
      </InputBox>
      <Button type="button">다음</Button>
    </SignUpBox>
  );
}
const SignUpBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.2rem;
`;
const ProgressBar = styled.progress``;
const Header = styled.div``;
const InputBox = styled.div`
  display: flex;
`;
const Input = styled.input``;
const Button = styled.button``;
export default SignUpPage;
