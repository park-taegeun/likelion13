function Greeting() {
// function으로 함수형 컴포넌트 Greeting 선언
    return <h1>Hello, React!</h1>;
}

function App() {
// function으로 함수형 컴포넌트 App 선언
    return (
        <div>
            <Greeting />
        </div>
    )
}
// <컴포넌트 /> 이거는 해당 컴포넌트를 실행하는 문법

export default App