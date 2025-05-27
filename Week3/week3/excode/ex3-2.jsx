import Profile from "./Profile";

function App() {
// 함수형 컴포넌트 App 선언 - 최상위 부모 컴포넌트
    return (
        <>
            <Profile
                name = "박태근"
                introduction = "오하요"
                viewCount = {120}
            />
        </>
    );
    // 내부에서 Profile 컴포넌트 사용 -> App이 부모 컴포넌트라는 것을 알 수 있다.
    // name, introduction, viewCount는 자식 컴포넌트(Profile)로 전달되는 props의 속성 값
}

export default App;