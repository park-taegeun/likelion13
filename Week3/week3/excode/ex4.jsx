function Profile({ name, introduction, viewCount }) {
// 함수형 컴포넌트 Profile
// 파라미터를 props 객체로 받는 대신 구조분해로 받는다.
    return (
        <>
            <p>이름: {name}</p>
            <p>소개: {introduction}</p>
            <p>조회수: {viewCount}</p>
        </>
    );
    // fragment로 하나로 감싸기
}

export default Profile;