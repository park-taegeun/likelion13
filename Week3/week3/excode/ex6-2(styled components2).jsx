import styled from "styled-components";

const ButtonDiv = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;
// 스타일 컴포넌트 ButtonDiv 생성 - <div>처럼 활용 가능

const Button = styled.button`
    width: 100px;
    height: 50px;
    background-color: ${(props) => (props.background)};
    color: white;
    padding: 10px;
    border-radius: 5px;
`;
// 스타일 컴포넌트 Button 생성 - <button>처럼 활용 가능

function App() {
// 부모 함수형 컴포넌트 App
    return (
        <ButtonDiv>
            <Button background = "skyblue">강조 버튼</Button>
            <Button background = "grey">기본 버튼</Button>
        </ButtonDiv>
    );
}

export default App;