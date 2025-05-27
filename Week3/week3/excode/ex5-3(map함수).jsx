import Profile from "./Profile";
// Profile 컴포넌트를 이 파일에서 사용하겠다.

function App() {
// 최상위 부모 컴포넌트 App
    const profiles = [
        { name: "박태근", introduction: "오하요", viewCount: 1500},
        { name: "이지민", introduction: "Hi", viewCount: 2050},
        { name: "이태희", introduction: "love", viewCount: 2100}
    ];
    // profiles는 3명의 사용자 정보를 담은 배열 -> 3명 각각은 객체이고 각 객체에는 name, introduction, viewCount 속성 존재

    return (
        <>
            {profiles.map((profile) => (
                <Profile 
                    key={profile.name}
                    name={profile.name}
                    introduction={profile.introduction}
                    viewCount={profile.viewCount}
                />
            ))}
        </>
    );
    /* 
    .map()은 배열을 반복하면서 각 요소를 가지고 무엇인가를 반환하는 함수
    ()안은 객체의 이름을 임의로 지정한 것 - 여기서는 profile로 지정
    map은 배열을 반복하는데 배열 내 객체가 3개 있으니 Profile 컴포넌트를 3번 작성하는 효과 발생
    리액트에서는 리스트를 .map()으로 그릴 때 각 항목마다 고유한 key 값을 줘야 함
    -> key 값을 보고 배열 내 객체가 변화한 걸 알아차린다
    -> 여기서는 name이 고유성을 갖는다고 판단해서 name으로 지은 거고 임의로 지어도 됌 -> 중복되는 것만 피하기
    마지막에는 fragment 사용해서 하나의 요소로 묶어준다.
    */
}

export default App;