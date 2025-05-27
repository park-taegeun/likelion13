function Profile({ name, introduction, viewCount }) {
// 함수형 컴포넌트 Profile 선언 - 구조분해 형식으로 props 받기
    return (
        <div style = {{backgroundColor:"skyblue", borderRadius: "8px"}}>
            <p>이름: {name}</p>
            <p>소개: {introduction}</p>
            <p>조회수: {viewCount}</p>
        </div>
    );
    // <div> 이용해서 하나의 요소로 묶어주고 인라인 요소로 스타일링링
}

export default Profile;