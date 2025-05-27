import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #f8f8f8;
`;
// 스타일 컴포넌트 Container 생성 - <div> 태그처럼 사용 가능

const Card = styled.div`
  background: ${(props) => props.background || "white"};
  color: ${(props) => props.textColor || "black"};
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
`;
// 스타일 컴포넌트 Card 생성 - <div> 태그처럼 사용 가능
// ${(props) => props.textColor || "black"} props 통해 textColor로 들어온 값을 쓰고 값이 없다면 black 사용해라.

const Button = styled.button`
  width: 120px;
  height: 45px;
  background-color: ${(props) => props.background || "gray"};
  color: ${(props) => props.color || "white"};
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: ${(props) => props.hoverColor || "#555"};
  }
`;
// 스타일 컴포넌트 Button 생성 - <button> 태그처럼 사용 가능

function App() {
// 함수형 최상위 부모 컴포넌트 App
  return (
    <Container>
      {/* 강조 스타일 카드 */}
      <Card background="skyblue" textColor="white">
        <h2>강조 카드</h2>
        <p>강조 스타일이 적용된 카드입니다.</p>
        <Button background="blue" hoverColor="#004494">강조 버튼</Button>
      </Card>

      {/* 기본 카드 */}
      <Card>
        <h2>기본 카드</h2>
        <p>기본 스타일이 적용된 카드입니다.</p>
        <Button>기본 버튼</Button>
      </Card>
    </Container>
  );
  // Container 컴포넌트로 하나의 요소로 묶어줌
  // background = "skyblue"라고 하면 Card 컴포넌트 내부적으로 props.background === "skyblue"라고 받는다
}

export default App;
