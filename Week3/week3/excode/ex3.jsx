function Profile(props) {
// Profile 함수형 컴포넌트 선언
// 파라미터 Props는 부모 컴포넌트가 전달해주는 데이터 객체
    return (
        <>
            <p>이름: {props.name}</p>
            <p>소개: {props.introduction}</p>
            <p>조회수: {props.viewCount}</p>
        </>
    );
    // fragment 사용해 불필요한 태그 없이 여러 요소를 렌더링 === 여러 개의 jsx요소를 화면에 표시한다 == 컴포넌트가 반환해야하는 요소를 하나로 잘 묶었다.
    // props.name : props는 부모 컴포넌트가 주는 데이터 객체, props.name은 그 객체의 name이라는 속성 값
}

export default Profile