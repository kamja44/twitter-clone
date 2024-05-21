import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff7f50;
  margin: 0;
  padding: 0;
`;

const Text = styled.span`
  font-size: 24px;
`;
export default function LoadingScreen() {
  return (
    <Wrapper>
      <Text>Loading ...</Text>
    </Wrapper>
  );
}
