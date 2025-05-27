import Profile from "./Profile";

function App() {
// 최상위 부모 함수형 컴포넌트 App 선언
    return (
        <>
        <Profile 
            name = "박태근"
            introduction = "오하요"
            viewCount = {1500}
        />
        <Profile 
            name = "이지민"
            introduction = "신조오사사게오"
            viewCount = {2000}
        />
        <Profile 
            name = "이태희"
            introduction = "헤키렛키잇센"
            viewCount = {15000}
        />
        </>
    );
    // fragment 사용해서 하나의 요소로 묶어주고
    // Profile 컴포넌트 사용 -> 컴포넌트의 특징 살려서 3번 재활용
}

export default App;