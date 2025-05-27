import { useState } from "react";

function App() {
// 최상위 부모 컴포넌트 
  const [time, setTime] = useState(1); 
  // state 변수 time : 현재 시간 값 저장, time 값을 변경할 수 있는 함수 setTime, useState(1): time의 초기값을 1로 설정

  function handleClick() {
    setTime(time + 1);
  }
  // 버튼 클릭 시 실행되는 함수
  // time을 1 증가시켜서 state 변수 값을 바꾼다. -> 상태가 바뀌면 컴포넌트가 다시 렌더링된다.

  return (
    <>
      <span>현재 시간: {time}시</span>
      <button onClick={handleClick}>Update</button>
    </>
  );
  // fragment 사용해서 하나의 요소로 묶어줌
  // <span> - 인라인요소라 줄바꿈 없음
  // <button onClick={handleClick}>Update</button> : 버튼을 누르면 handleClick()함수가 실행
}

export default App;