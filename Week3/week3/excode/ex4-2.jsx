import Profile from "./Profile";

function App() {
// 최상위 부모 함수형 컴포넌트 App
    return (
        <Profile 
            name = "박태근"
            introduction = "신조오사사게오"
            viewCount = {2000}
        />
    );
    // Profile 컴포넌트 사용 -> 자식에게 속성 값들 전달달
}

export default App;