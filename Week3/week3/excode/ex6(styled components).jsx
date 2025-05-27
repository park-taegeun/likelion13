import styled from "styled-components";

const Button = styled.button`
    width: 100px;
    height: 50px;
    background-color: skyblue;
    color: white;
    padding: 10px;
    border-radius: 5px;
`;
// styled.button을 함으로써 Button을 Html 태그처럼 사용이 가능하게 해준다
// styled.태그명 + 백틱 안에 css 작성 -> 이게 styled-components 기본 문법
// const 사용해서 Button이라는 컴포넌트를 선언하였고 백틱 안 css로 스타일링하고 styled.button으로 태그처럼 활용할 수 있게 만들어줌.

function App() {
// 부모 컴포넌트 App
    return (
        <Button>기본 버튼</Button>  
    );
    // Button 컴포넌트를 사용 -> App이 부모 컴포넌트임을 알 수 있다.
}

export default App;